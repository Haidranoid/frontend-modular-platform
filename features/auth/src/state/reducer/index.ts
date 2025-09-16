import type { Reducer } from 'redux'
import { authSlice } from '../slice'

export const initialAuthState = authSlice.getInitialState()

export type InitialAuthState = typeof initialAuthState

export const authReducer = authSlice.reducer as Reducer<InitialAuthState>
