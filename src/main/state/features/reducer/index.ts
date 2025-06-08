import { combineReducers } from 'redux'
import { authReducer, initialAuthState, AuthState } from '@features/slices/auth/authSlice'
import {
  usersReducer,
  initialUsersState,
  UsersState,
} from '@features/slices/users/usersSlice'
import {
  globalReducer,
  initialGlobalState,
  GlobalState,
} from '@features/slices/global/globalSlice'
import { withBaseState } from '@utils/features/with-base-state/withBaseState'
import { BaseState } from '@utils/features/base-slice/baseSlice'

export interface InitialAppState {
  auth: AuthState & BaseState
  users: UsersState & BaseState
  global: GlobalState & BaseState
}

export const initialAppState: InitialAppState = {
  auth: withBaseState(initialAuthState),
  users: withBaseState(initialUsersState),
  global: withBaseState(initialGlobalState),
}

export const appReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  global: globalReducer,
})
