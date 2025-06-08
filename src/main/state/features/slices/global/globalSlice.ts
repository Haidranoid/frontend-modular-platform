import { createBaseSlice } from '@utils/features/base-slice/baseSlice'

export interface GlobalState {
  init: boolean
  reboot: boolean
  shutdown: boolean
}

export const initialGlobalState: GlobalState = {
  init: false,
  reboot: false,
  shutdown: false,
}

const globalSlice = createBaseSlice({
  name: 'global',
  initialState: initialGlobalState,
  reducers: {},
  extraReducers: () => {},
})

export const globalActions = globalSlice.actions
export const globalReducer = globalSlice.reducer
export const globalSelectors = globalSlice.selectors
