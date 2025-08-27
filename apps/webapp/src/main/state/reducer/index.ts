import { combineReducers } from 'redux'
import { authReducer, initialAuthState } from '@webapp/auth'

export const initialAppState = {
    auth: initialAuthState,
    //users: {},
    //global: {},
}
export const appReducer = combineReducers({
    auth: authReducer,
    //users: {},
    //global: {},
})
//import { authReducer, initialAuthState, authThunks } from '@webapp/auth'
//import { globalReducer, initialGlobalState, globalThunks } from '@webapp/global'
//import { usersReducer, initialUsersState, usersThunks } from '@webapp/users'

/*
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
*/