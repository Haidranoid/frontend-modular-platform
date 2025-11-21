import { authSlice } from '../slice'

// ================== getting rootReducer from slice ===========================
export const authReducer = authSlice.reducer

// ================== getting initialState from slice ==========================
export const initialAuthState = authSlice.initialState
