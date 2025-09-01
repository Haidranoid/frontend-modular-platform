import type { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { getErrorMessage } from '@libraries/utils'
import { ApiFromSchema, UnifiedState } from '#types'
import { SliceNames, MatcherIdentifiers } from '#constants'
import { createThunk } from './create-thunk'
import { generateMatcher } from '../generate-matcher'

export type Thunks<TState, TApi extends ApiFromSchema<TState>> = {
  [K in keyof TApi]: ReturnType<typeof createThunk>
}

export function createSliceTools<TState, TApi extends ApiFromSchema<TState>>(
  slice: SliceNames,
  api: TApi,
) {
  const thunks = {} as Thunks<TState, TApi>

  for (const key in api) {
    const type = `${slice}/${key}`
    thunks[key] = createThunk(type, api[key]['operation'])
  }

  const names = Object.keys(api).reduce(
    (acc, key) => {
      acc[key as keyof TApi] = `${slice}/${key}`
      return acc
    },
    {} as Record<keyof TApi, string>,
  )

  const extraReducers = (builder: ActionReducerMapBuilder<UnifiedState<TState>>) => {
    Object.keys(thunks).forEach((key) => {
      const thunk = thunks[key]

      builder.addCase(thunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null

        api[key].onSuccess(state, action)
      })
    })

    // general PENDING matcher for every thunk
    builder.addMatcher(generateMatcher(slice, MatcherIdentifiers.IS_PENDING), (state) => {
      state.isLoading = true
      state.error = null
    })

    // general REJECTED matcher for every thunk
    builder.addMatcher(
      generateMatcher(slice, MatcherIdentifiers.IS_REJECTED),
      (state, action) => {
        state.isLoading = false
        state.error = getErrorMessage(action)
      },
    )
  }

  return {
    thunks,
    names,
    extraReducers,
  }
}
