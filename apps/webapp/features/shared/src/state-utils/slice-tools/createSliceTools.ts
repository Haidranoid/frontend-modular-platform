// utils/createSliceTools.ts
import { SliceNames } from '../../constants'
import { createThunk } from '../create-thunk'
import type { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import {
  isPendingGeneric,
  isRejectedGeneric,
} from '../matchers'
import { getErrorMessage } from '@libraries/utils'
import { Api, OnFulfilledMap, BaseState } from '../../types'

export function createSliceTools<TState, TApi extends Api>(
  slice: SliceNames,
  api: TApi,
  onFulfilledMap: OnFulfilledMap<TState, TApi> | null,
) {
  const thunks = {} as {
    [K in keyof TApi]: ReturnType<typeof createThunk>
  }

  for (const key in api) {
    const type = `${slice}/${key}`
    thunks[key] = createThunk(type, api[key])
  }

  const names = Object.keys(api).reduce(
    (acc, key) => {
      acc[key as keyof TApi] = `${slice}/${key}`
      return acc
    },
    {} as Record<keyof TApi, string>,
  )

  const extraReducers = (builder: ActionReducerMapBuilder<TState & BaseState>) => {
    ;(Object.keys(thunks) as (keyof TApi)[]).forEach((key) => {
      const thunk = thunks[key]
      builder.addCase(thunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null

        onFulfilledMap?.[key]?.(
          state,
          action as PayloadAction<Awaited<ReturnType<TApi[typeof key]>>>,
        )
      })
    })

    builder.addMatcher(isPendingGeneric(slice), (state) => {
      state.isLoading = true
      state.error = null
    })

    builder.addMatcher(isRejectedGeneric(slice), (state, action) => {
      state.isLoading = false
      state.error = getErrorMessage(action)
    })
  }

  return {
    slice,
    thunks,
    names,
    extraReducers,
  }
}

