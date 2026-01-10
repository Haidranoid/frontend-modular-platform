import type { Reducer } from 'redux'
import type { AuthState } from '../initial-state'
import { authSlice } from '../slice'

export const authReducer: Reducer<AuthState> = authSlice.reducer
