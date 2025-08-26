import { createBaseSlice } from '@webapp/shared/utils'
import { SliceNames } from '@webapp/shared/constants'

export interface GlobalState {
  init: boolean
  reboot: boolean
  shutdown: boolean
}

export const initialState: GlobalState = {
  init: false,
  reboot: false,
  shutdown: false,
}

export const globalSlice = createBaseSlice({
  name: SliceNames.Global,
  initialState,
  reducers: {
    init: () => {},
    reboot: () => {},
    shutdown: () => {},
  },
  extraReducers: () => {},
})
