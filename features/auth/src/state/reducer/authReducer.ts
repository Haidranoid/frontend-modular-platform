import { authSlice } from '../slice'
export type { AuthState } from '#types'
export type { Reducer } from 'redux'

// ================== getting rootReducer from slice ===========================
export const authReducer = authSlice.reducer

// ================== getting initialState from slice ==========================
export const initialAuthState = authSlice.initialState
