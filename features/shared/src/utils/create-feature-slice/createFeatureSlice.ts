import { createSlice } from '@reduxjs/toolkit'
import { ApiSchema, BaseState } from '#types'
import { createSliceTools, SliceName } from './create-slice-tools'

export function createFeatureSlice<
  S extends BaseState,
  TApi extends ApiSchema<S>,
>(options: { sliceName: SliceName; api: TApi; initialState: S }) {
  const { sliceName, api, initialState } = options

  const sliceTools = createSliceTools<S, TApi>({ sliceName, api })

  const slice = createSlice({
    name: sliceName,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      sliceTools.extraReducers(builder)
    },
  })

  return {
    slice,
    asyncThunks: sliceTools.asyncThunks,
  }
}
