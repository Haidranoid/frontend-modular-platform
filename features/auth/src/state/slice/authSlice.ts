import { createSlice, SliceNames } from '@webapp/shared'
import { authApi } from '../api'

// ========================== getting slice ====================================
export const authSlice = createSlice({
  sliceId: SliceNames.Auth,
  api: authApi,
  reducers: {},
  initialState: {
    user: null,
    isAuthenticated: false,
  },
})
