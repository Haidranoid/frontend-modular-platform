import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { rebootMatcher } from '@features/helpers/matchers/matchersUtils'
import { SliceNames } from '@constants'

export interface BaseState {
  isLoading: boolean
  error: Error | object | string | null
}

export const initialBaseState: BaseState = {
  isLoading: false,
  error: null,
}

type Options<S, CR, Name> = {
  name: Name
  initialState: S
  reducers: CR
  extraReducers?: (builder: any) => void
}

export const createBaseSlice = <
  S,
  CR extends Record<string, CaseReducer<S & BaseState, PayloadAction<any>>>,
  Name extends SliceNames,
>(
  options: Options<S, CR, Name>,
) => {
  const baseInitialState: S & BaseState = {
    ...initialBaseState,
    ...options.initialState,
  }

  //CR extends SliceCaseReducers<S & BaseState>,
  return createSlice({
    name: options.name,
    initialState: baseInitialState,
    //@ts-ignore
    reducers: options.reducers,
    extraReducers: (builder) => {
      options.extraReducers?.(builder)
      builder.addMatcher(rebootMatcher, () => baseInitialState)
    },
  })
}
