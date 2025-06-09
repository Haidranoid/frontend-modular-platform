// features/auth/authSlice.ts
import { createBaseSlice } from '@utils/features/base-slice/baseSlice'
import { Roles } from '@constants'
import { User } from '@interfaces/users/users.types'
import authTools from '@features/slices/auth/authTools'

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: {
    id: 1,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    role: Roles.ADMIN,
  },
}

const authSlice = createBaseSlice({
  name: authTools.slice,
  initialState: initialAuthState,
  reducers: {},
  extraReducers: authTools.extraReducers,
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
