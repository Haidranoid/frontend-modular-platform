import { combineReducers } from 'redux'
import { authReducer, initialAuthState } from '@webapp/auth'
//import { globalReducer, initialGlobalState } from '@webapp/global'
//import { usersReducer, initialUsersState } from '@webapp/users'

export const initialAppState = {
  auth: initialAuthState,
  //users: initialUsersState,
  // global: initialGlobalState,
}

export type InitialAppState = typeof initialAppState

export const appReducer = combineReducers({
  auth: authReducer,
  //users: usersReducer,
  //global: globalReducer,
})