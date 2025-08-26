import { authSlice } from '#state'

export const initialAuthState = authSlice.getInitialState()

export const authReducer = authSlice.reducer

export type InitialAuthState = typeof initialAuthState
