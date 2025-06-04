import { combineReducers } from 'redux'
import { authReducer, initialAuthState, AuthState } from '@features/auth/authSlice'

export type InitialAppState = {
  auth: AuthState
}

export const initialAppState: InitialAppState = {
  auth: initialAuthState,
}

const appReducer = combineReducers({
  auth: authReducer,
})

export default appReducer
