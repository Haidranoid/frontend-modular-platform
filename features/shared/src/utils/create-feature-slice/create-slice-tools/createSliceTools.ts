import {
  ActionReducerMapBuilder,
  AsyncThunkConfig,
  createAsyncThunk,
  isPending,
  isRejected,
  isFulfilled,
} from '@reduxjs/toolkit'
import {
  ApiSchema,
  AsyncThunks,
  BaseState,
  ExtractArgsOfAsync,
  ExtractReturnOfAsync,
} from '#types'
import { getErrorMessage } from './error-handlers'

export type SliceName = 'auth' | 'accounts' | 'global'

export interface CreateSliceToolsReturn<S extends BaseState, TApi extends ApiSchema<S>> {
  asyncThunks: AsyncThunks<S, TApi>
  extraReducers: (builder: ActionReducerMapBuilder<S>) => void
  sliceName: SliceName
}

export function createSliceTools<
  S extends BaseState,
  TApi extends ApiSchema<S>,
>(options: { sliceName: SliceName; api: TApi }): CreateSliceToolsReturn<S, TApi> {
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
      (action) => action.type.startsWith(`${sliceName}/`) && isPending(action),
      (state) => {
        state.isLoading = true
        state.error = null
      },
    )

    // general FULFILLED matcher for every thunk
    builder.addMatcher(
      (action) => action.type.startsWith(`${sliceName}/`) && isFulfilled(action),
      (state) => {
        state.isLoading = false
        state.error = null
      },
    )

    // general REJECTED matcher for every thunk
    builder.addMatcher(
      (action) => action.type.startsWith(`${sliceName}/`) && isRejected(action),
      (state, action) => {
        state.isLoading = false
        state.error = getErrorMessage(action)
      },
    )
  }

  return { asyncThunks, extraReducers, sliceName }
}
