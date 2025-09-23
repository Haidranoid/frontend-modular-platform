import type { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import {
  UnifiedState,
  BaseState,
  ApiSchema,
  ExtractReturnOfAsync,
  ExtractArgsOfAsync,
} from '#types'
import { SliceNames, MatcherIdentifiers } from '#constants'
import { getErrorMessage } from '../../error-handlers'
import { createThunk } from './create-thunk'
import { generateMatcher } from '../generate-matcher'

export type Thunks<TApi extends ApiSchema> = {
  [K in keyof TApi]: ReturnType<
    typeof createThunk<
      ExtractReturnOfAsync<TApi[K]['operation']>,
      ExtractArgsOfAsync<TApi[K]['operation']>
    >
  >
  //[K in keyof TApi]: ReturnType<typeof createThunk>
}

export function createSliceTools<
  TState extends BaseState = UnifiedState,
  TApi extends ApiSchema = ApiSchema,
>(api: TApi, slice: SliceNames) {
  const thunks = {} as Thunks<TApi>

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

  const extraReducers = (builder: ActionReducerMapBuilder<TState>) => {
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
