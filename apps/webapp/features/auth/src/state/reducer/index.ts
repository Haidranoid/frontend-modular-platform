import { authSlice } from '../slice'

export const initialAuthState = authSlice.getInitialState()

export const authReducer = authSlice.reducer

export type InitialAuthState = typeof initialAuthState