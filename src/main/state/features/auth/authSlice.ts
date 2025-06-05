// features/auth/authSlice.ts
import { createBaseSlice } from '@features/base-slice/baseSlice'
import { PayloadAction } from '@reduxjs/toolkit'
import { Roles } from '@constants'
import { me } from './authThunks'
import { User } from '@types'

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
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    loginSuccess(state, action: PayloadAction<User>) {
      state.isAuthenticated = true
      state.user = action.payload
    },
    logout(state) {
      state.isAuthenticated = false
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(me.fulfilled, (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload
    })
  },
})

const authActions = authSlice.actions
const authReducer = authSlice.reducer

export { authActions, authReducer }
