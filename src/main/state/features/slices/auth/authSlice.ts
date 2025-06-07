// features/auth/authSlice.ts
import { createBaseSlice } from '@utils/features/base-slice/baseSlice'
import { Roles } from '@constants'
import { login, logout, me } from './authThunks'
import { User } from '@interfaces/users/users.types'

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
  reducers: {},
  selectors: {
    user: (state) => state.user,
    isAuthenticated: (state) => state.user !== null,
    state: (state) => ({
      loading: state.loading,
      error: state.error,
    }),
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
  },
})

const authActions = authSlice.actions
const authReducer = authSlice.reducer

export { authActions, authReducer }
