import {
  ActionReducerMapBuilder,
  createSlice,
  Slice,
  SliceCaseReducers,
  SliceSelectors,
} from '@reduxjs/toolkit'

export interface BaseState {
  isLoading: boolean
  error: Error | object | string | null
}

export const initialBaseState: BaseState = {
  isLoading: false,
  error: null,
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
}): Slice<S & BaseState, CR, Name, CaseName, Selectors> => {
  const baseInitialState = {
    ...initialBaseState,
    ...options.initialState,
  }

  return createSlice({
    name: options.name,
    initialState: baseInitialState,
    //@ts-ignore
    reducers: options.reducers,
    extraReducers: (builder) => {
      options.extraReducers(builder)
    },
  })
}
