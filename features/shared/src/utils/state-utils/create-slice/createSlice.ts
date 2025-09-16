import {
  createSlice as cSlice,
  ThunkDispatch,
  Action,
  ReducerCreators,
  Slice,
  SliceCaseReducers,
  SliceSelectors,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit'
import { generateMatcher } from './generate-matcher'
import { SliceNames, MatcherIdentifiers } from '#constants'
import { ApiFromSchema, BaseState, UnifiedState, CallablesFromThunks } from '#types'
import { createSliceTools, Thunks } from './create-slice-tools'


//R extends SliceCaseReducers<UnifiedState<S>>,
//R extends
//    | ValidateSliceCaseReducers<UnifiedState<S>, CR>
//  | ((creators: ReducerCreators<UnifiedState<S>>) => CR),
//CR extends ((creators: ReducerCreators<UnifiedState<S>>) => SliceCaseReducers<UnifiedState<S>>) | {},

export function createSlice<
  N extends SliceNames,
  S extends object,
  R extends
    | ValidateSliceCaseReducers<TState, CR>
    | ((creators: ReducerCreators<TState>) => CR),
  TApi extends ApiFromSchema,
  TState extends BaseState = UnifiedState<S>,
  CR extends SliceCaseReducers<TState> = SliceCaseReducers<TState>,
>(options: {
  name: N
  initialState: S
  reducers: R
  api: TApi
}): Slice<TState, CR, N, N, SliceSelectors<TState>> & {
  thunks: Thunks<TApi>
  withDispatch: (
    dispatch: ThunkDispatch<S, any, Action>,
  ) => CallablesFromThunks<Thunks<TApi>>
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

  const { thunks, extraReducers } = createSliceTools(options.api, options.name)

  const slice = cSlice({
    name: options.name,
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
    withDispatch: (dispatch) => {
      const mapped = {} as CallablesFromThunks<Thunks<TApi>>

      for (const key in thunks) {
        mapped[key] = ((args: any) => dispatch(thunks[key](args))) as any
      }

      return mapped
    },
  }
}
