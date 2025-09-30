import { authSlice } from "../slice";
export type { AuthState } from '#types'

// ================== getting rootReducer from slice ===========================
export const authReducer = authSlice.reducer

// ================== getting initialState from slice ==========================
export const initialAuthState = authSlice.initialState