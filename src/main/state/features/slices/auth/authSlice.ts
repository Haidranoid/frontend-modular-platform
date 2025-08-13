import { createBaseSlice } from '@features/helpers/base-slice/baseSlice'
import { User } from '@features/types'
import { authTools } from '@features/tools'

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
}

export const authSlice = createBaseSlice({
  name: authTools.slice,
  initialState: initialAuthState,
  reducers: {},
  extraReducers: authTools.extraReducers,
})
