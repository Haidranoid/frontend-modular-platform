import {
  ActionReducerMapBuilder,
  CaseReducer,
  createSlice,
  Draft,
  Slice,
  SliceCaseReducers,
  SliceSelectors,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit'

export interface BaseState {
  isLoading: boolean
  error: Error | object | string | null
}

export const initialBaseState: BaseState = {
  isLoading: false,
  error: null,
}

// 👇 Helper selector to inject
function createFlagsSelector<S>() {
  return (state: S & BaseState) => ({
    isLoading: state.isLoading,
    error: state.error,
  })
}

// 👇 Options type declared in place
export const createBaseSlice = <
  S,
  CR extends SliceCaseReducers<S & BaseState>,
  Selectors extends SliceSelectors<S & BaseState>,
  Name extends string = string,
  CaseName extends string = string,
>(options: {
  name: Name
  initialState: S
  reducers: CR
  selectors?: Selectors
  extraReducers: (builder: ActionReducerMapBuilder<S & BaseState>) => void
}): Slice<
  S & BaseState,
  CR & { resetState: CaseReducer<S & BaseState> },
  Name,
  CaseName,
  Selectors & {
    flags: ReturnType<typeof createFlagsSelector<S>>
  }
> => {
  const baseInitialState: S & BaseState = {
    ...initialBaseState,
    ...options.initialState,
  }

  const reducers = {
    ...options.reducers,
    resetState: (state: Draft<S & BaseState>) => {
      Object.assign(state, baseInitialState)
    },
  } as ValidateSliceCaseReducers<
    S & BaseState,
    CR & {
      resetState: CaseReducer<S & BaseState>
    }
  >

  return createSlice({
    name: options.name,
    initialState: baseInitialState,
    reducers,
    selectors: {
      ...(options.selectors ?? {}),
      flags: createFlagsSelector<S>(),
    } as any,
    extraReducers: (builder) => {
      options.extraReducers(builder)
    },
  })
}
