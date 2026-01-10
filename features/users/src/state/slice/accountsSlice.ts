import { createSlice } from '@reduxjs/toolkit'
import { SliceNames } from '@webapp/shared'
import { initialState } from '../initial-state'
import { accountsSliceTools } from '../slice-tools'

export const accountsSlice = createSlice({
  name: SliceNames.ACCOUNTS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    accountsSliceTools.extraReducers(builder)
  },
})
