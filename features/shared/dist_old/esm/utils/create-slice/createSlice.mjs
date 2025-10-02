import _defineProperty from '../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.mjs';
import { createSlice as createSlice$1 } from '@reduxjs/toolkit';
import { createSliceTools } from './create-slice-tools/createSliceTools.mjs';
import { SliceNames } from '../../constants/slice-names/SliceNames.mjs';
import { generateMatcher } from './generate-matcher/generate-matcher.mjs';
import { MatcherIdentifiers } from '../../constants/matcher-identifiers/MatcherIdentifiers.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function mergeState(base, state) {
  return _objectSpread(_objectSpread({}, base), state);
}
function createSlice(options) {
  var initialBaseState = {
    isLoading: false,
    error: null
  };
  var baseInitialState = mergeState(initialBaseState, options.initialState);
  var _createSliceTools = createSliceTools(options.api, options.sliceId),
    thunks = _createSliceTools.thunks,
    _extraReducers = _createSliceTools.extraReducers;
  var slice = createSlice$1({
    name: options.sliceId,
    initialState: baseInitialState,
    reducers: options.reducers,
    extraReducers: function extraReducers(builder) {
      _extraReducers(builder);
      builder.addMatcher(generateMatcher(SliceNames.Global, MatcherIdentifiers.IS_FULFILLED), function () {
        return baseInitialState;
      });
    }
  });
  return {
    reducer: slice.reducer,
    initialState: slice.getInitialState(),
    thunks: thunks
  };
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

export { createSlice, mergeState };
