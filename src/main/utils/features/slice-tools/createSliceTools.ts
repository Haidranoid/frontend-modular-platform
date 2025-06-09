// utils/createSliceTools.ts
import { SliceNames } from '@constants'
import { createThunk } from '@utils/features/thunks/createThunk'
import type { ActionReducerMapBuilder, Draft, PayloadAction } from '@reduxjs/toolkit'
import {
  isPendingGeneric,
  isRejectedGeneric,
} from '@utils/features/matchers/matchersUtils'
import { getErrorMessage } from '@utils/http-client/httpClientUtils'
import { Api, OnFulfilledMap } from '@interfaces/features/api/api.types'
import { BaseState } from '@utils/features/base-slice/baseSlice'

function createSliceTools<TState, TApi extends Api>(
  slice: SliceNames,
  api: TApi,
  options?: {
    onFulfilled?: OnFulfilledMap<TState, TApi>
  },
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

        options?.onFulfilled?.[key]?.(
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

export default createSliceTools
