import { combineReducers } from 'redux'
import { authReducer, initialAuthState, AuthState } from '@features/slices/auth/authSlice'
import {
  usersReducer,
  initialUsersState,
  UsersState,
} from '@features/slices/users/usersSlice'
import { withBaseState } from '@utils/features/with-base-state/withBaseState'
import { BaseState } from '@utils/features/base-slice/baseSlice'

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
