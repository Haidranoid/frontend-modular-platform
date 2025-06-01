import appReducer from '../app/app.reducer'
import { AppReducerState } from '../interfaces/app.reducer.types'

import { initialGlobalState } from '../global/global.reducer'
import { initialAuthState } from '../authentication/authentication.reducer'
import { initialUsersReducerState } from '../users/users.reducer'
import {
  AuthenticationActions,
  AuthenticationActionTypes,
  GlobalActions,
  GlobalActionTypes,
} from '@actions'

export const initialRootState: AppReducerState = {
  global: initialGlobalState,
  auth: initialAuthState,
  users: initialUsersReducerState,
}

const rootReducer = (
  state: AppReducerState | undefined,
  action: AuthenticationActions | GlobalActions,
) => {
  if (action.type === AuthenticationActionTypes.LOGOUT_SUCCESS) {
    // Reset the whole store by setting state to undefined
    return appReducer(undefined, action)
  }
  if (action.type === GlobalActionTypes.RESET_APP) {
    // Reset the whole store by setting state to undefined
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export default rootReducer
