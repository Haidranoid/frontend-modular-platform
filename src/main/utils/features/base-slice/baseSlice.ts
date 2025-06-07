// utils/baseSlice.ts
import {
  createSlice,
  Slice,
  SliceCaseReducers,
  ActionReducerMapBuilder,
  CaseReducer,
  SliceSelectors,
} from '@reduxjs/toolkit'

export interface BaseState {
  loading: boolean
  error: Error | object | string | null
}

export const initialBaseState: BaseState = {
  loading: false,
  error: null,
}

interface ResetState<S> {
  resetState: CaseReducer<S>
}

interface Options<
  S,
  CR extends SliceCaseReducers<S & BaseState>,
  Selectors extends SliceSelectors<S & BaseState>,
> {
  name: string
  initialState: S
  reducers: CR
  selectors?: Selectors
  extraReducers: (builder: ActionReducerMapBuilder<S & BaseState>) => void
}

export const createBaseSlice = <
  S,
  CR extends SliceCaseReducers<S & BaseState>,
  Selectors extends SliceSelectors<S & BaseState>,
  Name extends string = string,
  CaseName extends string = string,
>(
  options: Options<S, CR, Selectors>,
): Slice<S & BaseState, CR & ResetState<S & BaseState>, Name, CaseName, Selectors> => {
  const baseInitialState = {
    ...initialBaseState,
    ...options.initialState,
  }

  return createSlice({
    name: options.name as Name,
    initialState: baseInitialState,
    // @ts-ignore
    reducers: {
      ...options.reducers,
      resetState: () => baseInitialState,
    },
    selectors: options.selectors,
    extraReducers: (builder) => {
      options.extraReducers?.(builder)
    },
  })
}
