import {
  createSlice as cSlice,
  ReducerCreators,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit'
import { SliceNames, MatcherIdentifiers } from '#constants'
import { ApiSchema, BaseState, UnifiedState } from '#types'
import { generateMatcher } from './generate-matcher'
import { createSliceTools } from './create-slice-tools'

export type Merge<T> = {
  [K in keyof T]: T[K]
}

export type ExtractState<T> = T extends ApiSchema<infer U, any> ? U : never

export function mergeState<T extends BaseState, U extends object>(
  base: T,
  state: U,
): T & U {
  return { ...base, ...state }
}

export function createSlice<
  TApi extends ApiSchema<any, any>,
  R extends
    | ValidateSliceCaseReducers<TState, CR>
    | ((creators: ReducerCreators<TState>) => CR),
  TState = UnifiedState<ExtractState<TApi>>,
  CR extends SliceCaseReducers<TState> = SliceCaseReducers<TState>,
>(options: {
  sliceId: SliceNames
  api: TApi
  reducers: R
  initialState: Required<ExtractState<TApi>> & Partial<BaseState>
}) {
  const initialBaseState: BaseState = {
    isLoading: false,
    error: null,
  }

  const baseInitialState: TState = mergeState(initialBaseState, options.initialState)
  const { thunks, extraReducers } = createSliceTools(options.api, options.sliceId)

  const slice = cSlice({
    name: options.sliceId,
    initialState: baseInitialState,
    reducers: options.reducers,
    extraReducers: (builder) => {
      extraReducers(builder)
      builder.addMatcher(
        generateMatcher(SliceNames.Global, MatcherIdentifiers.IS_FULFILLED),
        () => baseInitialState,
      )
    },
  })

  return {
    reducer: slice.reducer,
    initialState: slice.getInitialState(),
    thunks,
  }
}

/*

>(options: {
    sliceId: SliceNames
    api: ApiSchema<any, any>,
    reducers: R
    initialState: TState
  } & (
    // 🔒 Constraint: el S inferido desde initialState debe ser compatible con el de la Api
    TApi extends ApiSchema<infer U, any>
      ? { __stateCheck?: S extends U ? unknown : never }
      : {}),
) {


export function createSlice<
  S extends object,
  N extends SliceNames,
  R extends
    | ValidateSliceCaseReducers<TState, CR>
    | ((creators: ReducerCreators<TState>) => CR),
  TApi extends ApiSchema<any, any>,
  TState extends BaseState = UnifiedState<S>,
  CR extends SliceCaseReducers<TState> = SliceCaseReducers<TState>,
>(options: {
  initialState: S
  sliceId: N
  reducers: R
  api: TApi
}) {


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
