import { createBaseSlice } from '@webapp/shared/state-utils'
import { SliceNames } from '@webapp/shared/constants'

export interface GlobalState {
  init: boolean
  reboot: boolean
  shutdown: boolean
}

const initialGlobalState: GlobalState = {
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
