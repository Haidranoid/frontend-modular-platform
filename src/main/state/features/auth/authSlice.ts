// features/auth/authSlice.ts
import { PayloadAction } from '@reduxjs/toolkit'
import { createBaseSlice, BaseState } from '../../utils/baseSlice'
import { fetchUser } from './authThunks'

interface AuthState extends BaseState {
  isAuthenticated: boolean
  user: string | null
}

const initialState: AuthState = {
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
  initialState,
  reducers: authReducers,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload
    })
  },
})

export const { login, logout, resetState } = authSlice.actions
export default authSlice.reducer
