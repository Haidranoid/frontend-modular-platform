// utils/baseSlice.ts
import {
  createSlice,
  Slice,
  SliceCaseReducers,
  ActionReducerMapBuilder,
  CaseReducer,
} from '@reduxjs/toolkit'
import {
  commonPendingMatcher,
  commonRejectedMatcher,
} from '../async-matchers/asyncMatchersUtils'

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

interface Options<S, CR extends SliceCaseReducers<S & BaseState>> {
  name: string
  initialState: S & BaseState
  reducers: CR
  extraReducers: (builder: ActionReducerMapBuilder<S & BaseState>) => void
}

type CreatBaseSlice = <S, CR extends SliceCaseReducers<S & BaseState>>(
  options: Options<S, CR>,
) => Slice<S & BaseState, CR & ResetState<S & BaseState>>

export const createBaseSlice: CreatBaseSlice = (options) => {
  const { name, initialState, reducers, extraReducers } = options
  return createSlice({
    name,
    initialState: {
      ...initialState,
      ...initialBaseState,
    },
    // @ts-ignore
    reducers: {
      ...reducers,
      resetState: () => {
        return {
          ...initialState,
          ...initialBaseState,
        }
      },
    },
    extraReducers: (builder) => {
      extraReducers?.(builder)
      builder.addMatcher(commonPendingMatcher, (state) => {
        state.loading = true
        state.error = null
      })
      builder.addMatcher(commonRejectedMatcher, (state, action) => {
        state.loading = false
        state.error = action.payload || action.error?.message || 'Error inesperado'
      })
    },
  })
}
