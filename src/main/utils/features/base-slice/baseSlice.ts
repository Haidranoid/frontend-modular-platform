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

export function createBaseSlice<
  S extends object,
  CR extends SliceCaseReducers<S & BaseState>,
>(options: {
  name: string
  initialState: S
  reducers: CR
  extraReducers?: (builder: ActionReducerMapBuilder<S & BaseState>) => void
}): Slice<
  S & BaseState,
  CR & {
    resetState: CaseReducer<S & BaseState>
  }
> {
  return createSlice({
    name: options.name,
    initialState: {
      ...options.initialState,
      ...initialBaseState,
    },
    // @ts-ignore
    reducers: {
      ...options.reducers,
      resetState: () => {
        return {
          ...options.initialState,
          ...initialBaseState,
        }
      },
    },
    extraReducers: (builder) => {
      options.extraReducers?.(builder)
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
