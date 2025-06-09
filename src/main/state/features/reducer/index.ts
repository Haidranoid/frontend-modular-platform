import { combineReducers } from 'redux'
import { authReducer, initialAuthState } from '@features/slices/auth/authSlice'
import { usersReducer, initialUsersState } from '@features/slices/users/usersSlice'
import { globalReducer, initialGlobalState } from '@features/slices/global/globalSlice'
import { withBaseState } from '@utils/features/with-base-state/withBaseState'

export const initialAppState = {
  auth: withBaseState(initialAuthState),
  users: withBaseState(initialUsersState),
  global: withBaseState(initialGlobalState),
}

export type InitialAppState = typeof initialAppState

export const appReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  global: globalReducer,
})
