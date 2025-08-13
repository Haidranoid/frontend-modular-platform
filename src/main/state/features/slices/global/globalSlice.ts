import { createBaseSlice } from '@features/helpers/base-slice/baseSlice'
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

export const globalSlice = createBaseSlice({
  name: SliceNames.Global,
  initialState: initialGlobalState,
  reducers: {
    init: () => {},
    reboot: () => {},
    shutdown: () => {},
  },
  extraReducers: () => {},
})
