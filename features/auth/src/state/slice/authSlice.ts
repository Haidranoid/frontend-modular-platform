import { createSlice } from '@reduxjs/toolkit'
import { SliceNames } from '@webapp/shared'
import { initialState } from '../initial-state'
import { authSliceTools } from '../slice-tools'

export const authSlice = createSlice({
  name: SliceNames.AUTH,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    authSliceTools.extraReducers(builder)
  },
})
