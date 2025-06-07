import { combineReducers } from 'redux'
import { authReducer, initialAuthState, AuthState } from '@features/auth/authSlice'
import { usersReducer, initialUsersState, UsersState } from '@features/users/usersSlice'
import { withBaseState } from '@utils/features/with-base-state/withBaseState'
import { BaseState } from '@features/base-slice/baseSlice'

export type InitialAppState = {
  auth: AuthState & BaseState
  users: UsersState & BaseState
}

export const initialAppState: InitialAppState = {
  auth: withBaseState(initialAuthState),
  users: withBaseState(initialUsersState),
}

export const appReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
})
