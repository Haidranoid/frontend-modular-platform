import appReducer from './app/app.reducer'
import AuthenticationTypes from '../actions/authentication/AuthenticationActionsTypes'
import GlobalActionsTypes from '../actions/global/GlobalActionsTypes'
import AuthenticationActions from '../actions/authentication/AuthenticationActions'
import { AppReducerState } from './app/app.reducer.types'
import GlobalActions from '../actions/global/GlobalActions'

const rootReducer = (
  state: AppReducerState | undefined,
  action: AuthenticationActions | GlobalActions,
) => {
  if (action.type === AuthenticationTypes.LOGOUT_SUCCESS) {
    // Reset the whole store by setting state to undefined
    return appReducer(undefined, action)
  }
  if (action.type === GlobalActionsTypes.INIT_RESET) {
    // Reset the whole store by setting state to undefined
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export default rootReducer
