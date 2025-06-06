import { createSlice } from '@reduxjs/toolkit'
import { authThunks } from './thunks' // your previously defined thunks
import { User } from '@interfaces/users/users.types'

type AuthState = {
  user: User | null
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // non-async reducers here (if needed)q
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(authThunks.login.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(authThunks.login.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload.user
    })
    builder.addCase(authThunks.login.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message ?? 'Login failed'
    })

    // getMe
    /*builder.addCase(authThunks.getMe.pending, (state) => {
      state.loading = true
    })
    builder.addCase(authThunks.getMe.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload
    })
    builder.addCase(authThunks.getMe.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message ?? 'Fetch failed'
    })*/
  },
})

export const authReducer = authSlice.reducer
