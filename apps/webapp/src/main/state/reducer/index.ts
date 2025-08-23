import { combineReducers } from 'redux'
import { authReducer, initialAuthState } from '@webapp/auth/state'
import { globalReducer, initialGlobalState } from '@webapp/global/state'
import { usersReducer, initialUsersState } from '@webapp/users/state'

export const initialAppState = {
  auth: initialAuthState,
  users: initialUsersState,
  global: initialGlobalState,
}

export type InitialAppState = typeof initialAppState

export const appReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  global: globalReducer,
})
