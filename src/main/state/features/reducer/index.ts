import { combineReducers } from 'redux'
import { authSlice, globalSlice, usersSlice } from '@features/slices'

//TODO: declare types for each reducer
export const initialAppState = {
  auth: authSlice.getInitialState(),
  users: usersSlice.getInitialState(),
  global: usersSlice.getInitialState(),
}

export type InitialAppState = typeof initialAppState

export const appReducer = combineReducers({
  auth: authSlice.reducer,
  users: usersSlice.reducer,
  global: globalSlice.reducer,
})
