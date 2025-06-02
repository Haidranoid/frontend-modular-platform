import { AppReducerState } from '../interfaces/app.reducer.types'
import { appReducer } from './app/app.reducer'
import {
  AuthenticationActionTypes,
  GlobalActionTypes,
  ApplicationActions,
} from '@actions'

const rootReducer = (state: AppReducerState | undefined, action: ApplicationActions) => {
  if (action.type === AuthenticationActionTypes.LOGOUT_SUCCESS) {
    return appReducer(undefined, action)
  }
  if (action.type === GlobalActionTypes.RESET_APP) {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export default rootReducer
