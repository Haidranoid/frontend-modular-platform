import { createBaseSlice } from '@utils/features/base-slice/baseSlice'
import { User } from '@interfaces/users/users.types'
import authTools from '@features/slices/auth/authTools'

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
}

const authSlice = createBaseSlice({
  name: authTools.slice,
  initialState: initialAuthState,
  extraReducers: authTools.extraReducers,
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
