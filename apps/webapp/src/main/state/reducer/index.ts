import { combineReducers } from 'redux'
//import * as auth from '@webapp/auth'

export const initialAppState = {
    auth: {},
    users: {},
    global: {},
}
export const appReducer = combineReducers({
    auth: {},
    users: {},
    global: {},
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