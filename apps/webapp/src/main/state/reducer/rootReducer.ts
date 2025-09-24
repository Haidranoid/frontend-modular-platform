import { combineReducers } from 'redux'
import { authRootReducer, initialAuthState } from '@webapp/auth'
//import { globalReducer, initialGlobalState } from '@webapp/global'
//import { usersReducer, initialUsersState } from '@webapp/users'

export const initialAppState = {
  auth: initialAuthState,
  //users: initialUsersState,
  // global: initialGlobalState,
}

export const appReducer = combineReducers({
  auth: authRootReducer,
  //users: usersReducer,
  //global: globalReducer,
})
