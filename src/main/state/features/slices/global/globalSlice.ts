import { createBaseSlice } from '@utils/features/base-slice/baseSlice'
import { SliceNames } from '@constants'

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
  name: SliceNames.Global,
  initialState: initialGlobalState,
  reducers: {
    init: () => {},
    reboot: () => {},
    shutdown: () => {},
  },
  extraReducers: () => {},
})

export const globalActions = globalSlice.actions
export const globalReducer = globalSlice.reducer
