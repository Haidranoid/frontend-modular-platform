import {
  ActionReducerMapBuilder,
  AsyncThunkConfig,
  createAsyncThunk,
} from '@reduxjs/toolkit'
import {
  ApiSchema,
  AsyncThunks,
  BaseState,
  ExtractArgsOfAsync,
  ExtractReturnOfAsync,
} from '#types'
import { MatcherIdentifiers, SliceNames } from '#constants'
import { getErrorMessage } from './../error-handlers'
import { generateSliceMatchers } from './../generate-slice-matchers'

export interface CreateSliceToolsReturn<S extends BaseState, TApi extends ApiSchema<S>> {
  asyncThunks: AsyncThunks<S, TApi>
  extraReducers: (builder: ActionReducerMapBuilder<S>) => void
}

export function createSliceTools<
  S extends BaseState,
  TApi extends ApiSchema<S>,
>(options: { sliceName: typeof SliceNames; api: TApi }): CreateSliceToolsReturn<S, TApi> {
  const { sliceName, api } = options
  const asyncThunks = {} as AsyncThunks<S, TApi>

  for (const key in api) {
    const actionType = `${sliceName}/${key}`
    const payloadCreator = api[key]['httpRequest']

    type Return = ExtractReturnOfAsync<typeof payloadCreator>
    type Args = ExtractArgsOfAsync<typeof payloadCreator>

    asyncThunks[key] = createAsyncThunk<Return, Args, AsyncThunkConfig>(
      actionType,
      async (args, thunkAPI) => {
        try {
          return await payloadCreator(args)
        } catch (err) {
          return thunkAPI.rejectWithValue(err)
        }
      },
    )
  }

  const extraReducers = (builder: ActionReducerMapBuilder<S>) => {
    Object.keys(asyncThunks).forEach((key) => {
      const thunk = asyncThunks[key]

      builder.addCase(thunk.pending, (state, action) => {
        api[key].onLoading?.(state, action)
      })

      builder.addCase(thunk.fulfilled, (state, action) => {
        api[key].onSuccess(state, action)
      })

      builder.addCase(thunk.rejected, (state, action) => {
        api[key].onError?.(state, action)
      })
    })

    // general PENDING matcher for every thunk
    builder.addMatcher(
      generateSliceMatchers(sliceName, MatcherIdentifiers.IS_PENDING),
      (state) => {
        state.isLoading = true
        state.error = null
      },
    )

    // general FULFILLED matcher for every thunk
    builder.addMatcher(
      generateSliceMatchers(sliceName, MatcherIdentifiers.IS_FULFILLED),
      (state) => {
        state.isLoading = false
        state.error = null
      },
    )

    // general REJECTED matcher for every thunk
    builder.addMatcher(
      generateSliceMatchers(sliceName, MatcherIdentifiers.IS_REJECTED),
      (state, action) => {
        state.isLoading = false
        state.error = getErrorMessage(action)
      },
    )
  }

  return { asyncThunks, extraReducers }
}

/*
type Return = ExtractReturnOfAsync<typeof payloadCreator>
    type Args = ExtractArgsOfAsync<typeof payloadCreator>

    thunks[key] = createAsyncThunk<Return, Args>(actionType, async (args, thunkAPI) => {
      try {
        return await payloadCreator(args)
      } catch (err) {
        return thunkAPI.rejectWithValue(err)
      }
    })

  const names = Object.keys(api).reduce(
    (acc, key) => {
      acc[key as keyof TApi] = `${sliceId}/${key}`
      return acc
    },
    {} as Record<keyof TApi, string>,
  )
 */
