import {
  createSlice as cSlice,
  ReducerCreators,
  Slice,
  SliceCaseReducers,
  SliceSelectors,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit'
import { SliceNames, MatcherIdentifiers } from '#constants'
import { ApiSchema, BaseState, UnifiedState } from '#types'
import { generateMatcher } from './generate-matcher'
import { createSliceTools, Thunks } from './create-slice-tools'

/*
R extends SliceCaseReducers<UnifiedState<S>>,
R extends
    | ValidateSliceCaseReducers<UnifiedState<S>, CR>
  | ((creators: ReducerCreators<UnifiedState<S>>) => CR),
CR extends ((creators: ReducerCreators<UnifiedState<S>>) => SliceCaseReducers<UnifiedState<S>>) | {},
  withDispatch: (
    dispatch: ThunkDispatch<S, any, Action>,
  ) => CallablesFromThunks<Thunks<TApi>>
*/
export function createSlice<
  N extends SliceNames,
  S extends object,
  R extends
    | ValidateSliceCaseReducers<TState, CR>
    | ((creators: ReducerCreators<TState>) => CR),
  TApi extends ApiSchema<any, any>,
  TState extends BaseState = UnifiedState<S>,
  CR extends SliceCaseReducers<TState> = SliceCaseReducers<TState>,
>(options: {
  sliceId: N
  initialState: S
  reducers: R
  api: TApi
}): Slice<TState, CR, N, N, SliceSelectors<TState>> & {
  thunks: Thunks<TApi>
} {
  const initialBaseState: BaseState = {
    isLoading: false,
    error: null,
  }

  // @ts-ignore
  const baseInitialState: TState = {
    ...initialBaseState,
    ...options.initialState,
  }

  const { thunks, extraReducers } = createSliceTools(options.api, options.sliceId)

  const slice = cSlice({
    name: options.sliceId,
    initialState: baseInitialState,
    reducers: options.reducers,
    extraReducers: (builder) => {
      extraReducers(builder)

      // every slice created with createBaseSlice includes a matcher that runs when an action dispatched by a global
      // action it's triggered, like init, reboot, shutdown, etc.
      // TODO: add logic to filter which action should be catch to be more specific
      builder.addMatcher(
        generateMatcher(SliceNames.Global, MatcherIdentifiers.IS_FULFILLED),
        () => baseInitialState,
      )
    },
  })

  return {
    ...slice,
    thunks,
  }
}
