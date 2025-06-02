// features/auth/authSlice.ts
import { PayloadAction } from '@reduxjs/toolkit'
import { BaseState, createBaseSlice } from '@utils'
import { fetchUser } from './authThunks'

interface AuthState extends BaseState {
  isAuthenticated: boolean
  user: string | null
}

export const initialAuthState: AuthState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  user: null,
}

// Define reducers as a separate constant to retain type inference
const authReducers = {
  login(state: AuthState, action: PayloadAction<string>) {
    state.isAuthenticated = true
    state.user = action.payload
  },
  logout(state: AuthState) {
    state.isAuthenticated = false
    state.user = null
  },
}

const authSlice = createBaseSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: authReducers,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload
    })
  },
})

const authActions = authSlice.actions
const authReducer = authSlice.reducer

export { authActions, authReducer }
