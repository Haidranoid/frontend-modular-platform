import { combineReducers } from 'redux'
import { authReducer, initialAuthState } from '@webapp/auth'
import { usersReducer, initialUsersState } from '@webapp/users'
//import { globalReducer, initialGlobalState } from '@webapp/global'

export const initialAppState = {
  auth: initialAuthState,
  users: initialUsersState,
  // global: initialGlobalState,
}

export const appReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  //global: globalReducer,
})
