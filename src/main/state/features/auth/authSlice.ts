import { createSlice, isPending, isRejected } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchUser } from './authThunks'

// Estado
interface AuthState {
  isAuthenticated: boolean
  user: string | null
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isAuthenticated = true
      state.user = action.payload
    },
    logout(state) {
      state.isAuthenticated = false
      state.user = null
    },
  },
  extraReducers: (builder) => {
    // Manejo explícito para cuando se resuelve bien
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload
    })

    // Matchers para centralizar loading/error sin repetir
    builder.addMatcher(isPending, (state) => {
      state.loading = true
      state.error = null
    })

    builder.addMatcher(isRejected, (state, action) => {
      state.loading = false
      state.error = (action.payload as string) || 'Error inesperado'
    })

    // O bien puedes usar una utilidad personalizada si quieres más control por slice
  },
})

const authReducer = authSlice.reducer

export const { login, logout } = authSlice.actions
export default authReducer
