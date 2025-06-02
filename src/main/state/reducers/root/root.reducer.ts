import { AppReducerState } from '../interfaces/app.reducer.types'
import {
  AuthenticationActionTypes,
  GlobalActionTypes,
  ApplicationActions,
} from '@actions'
import { appReducer } from '../app/app.reducer'

export const rootReducer = (
  state: AppReducerState | undefined,
  action: ApplicationActions,
) => {
  if (action.type === AuthenticationActionTypes.LOGOUT_SUCCESS) {
    return appReducer(undefined, action)
  }
  if (action.type === GlobalActionTypes.RESET_APP) {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}
