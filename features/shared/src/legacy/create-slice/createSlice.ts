import {
  ActionReducerMapBuilder,
  createSlice as cSlice,
  SliceCaseReducers,
} from '@reduxjs/toolkit'
import { SliceNames } from '#constants'
import { BaseState } from '#types'

/*
export type CreateSliceReturn<
  N extends SliceNames,
  S extends object,
  R extends SliceCaseReducers<S & BaseState>,
> = Slice<S & BaseState, R, N>
 */

export function createSlice<
  N extends typeof SliceNames,
  S extends object,
  R extends SliceCaseReducers<S & BaseState>,
>(options: {
  sliceName: N
  initialState: S & Partial<BaseState>
  reducers: R
  extraReducers: (builder: ActionReducerMapBuilder<S & BaseState>) => void
}) {
  const initialBaseState: BaseState = {
    isLoading: false,
    error: null,
  }

  const baseInitialState: S & BaseState = {
    ...initialBaseState,
    ...options.initialState,
  }

  const sliceCreated = cSlice({
    //@ts-ignore
    name: options.sliceName,
    initialState: baseInitialState,
    //@ts-ignore
    reducers: options.reducers,
    extraReducers: (builder) => {
      options.extraReducers(builder)
      //builder.addMatcher(generateMatcher(SliceNames.GLOBAL, MatcherIdentifiers.IS_FULFILLED), () => baseInitialState,)
    },
  })

  return sliceCreated
}
