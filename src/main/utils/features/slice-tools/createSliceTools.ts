// utils/createSliceTools.ts
import { SliceNames } from '@constants'
import { createThunk } from '@utils/features/thunks/createThunk'
import type { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit'
import {
  isPendingGeneric,
  isRejectedGeneric,
} from '@utils/features/matchers/matchersUtils'
import { getErrorMessage } from '@utils/http-client/httpClientUtils'
import { Api, OnFulfilledMap } from '@interfaces/features/api.types'

function createSliceTools<TApi extends Api>(
  slice: SliceNames,
  api: TApi,
  options?: {
    onFulfilled?: OnFulfilledMap<TApi>
  },
) {
  const thunks = {} as {
    [K in keyof TApi]: AsyncThunk<unknown, object | undefined, object>
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

  const extraReducers = (builder: ActionReducerMapBuilder<any>) => {
    Object.entries(thunks).forEach(([key, thunk]) => {
      builder.addCase(thunk.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        options?.onFulfilled?.[key as keyof TApi]?.(state, action)
      })
    })

    builder.addMatcher(isPendingGeneric, (state) => {
      state.loading = true
      state.error = null
    })

    builder.addMatcher(isRejectedGeneric, (state, action) => {
      state.loading = false
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
