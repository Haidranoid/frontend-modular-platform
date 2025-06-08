// features/auth/authSlice.ts
import { createBaseSlice } from '@utils/features/base-slice/baseSlice'
import { Roles } from '@constants'
import { login, logout, me } from './authThunks'
import { User } from '@interfaces/users/users.types'
import {
  commonPendingMatcher,
  commonRejectedMatcher,
} from '@utils/features/async-matchers/asyncMatchersUtils'
import AuthenticationService from '@lib/auth-service/AuthenticationService'
import { getErrorMessage } from '@utils/http-client/httpClientUtils'
import { PayloadAction } from '@reduxjs/toolkit'
import { LoginSuccess } from '@interfaces/auth/responses/authResponses.types'

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
    startSession: (state, action: PayloadAction<LoginSuccess>) => {
      const { accessToken, refreshToken } = action.payload
      AuthenticationService.startSession(accessToken, refreshToken)
    },
    closeSession: () => {
      AuthenticationService.closeSession()
    },
  },
  extraReducers: (builder) => {
    builder.addCase(me.fulfilled, (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload.user
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload.user
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuthenticated = false
      state.user = null
    })
    builder.addMatcher(commonPendingMatcher, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addMatcher(commonRejectedMatcher, (state, action) => {
      state.isLoading = false
      state.error = getErrorMessage(action.error)
    })
  },
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
