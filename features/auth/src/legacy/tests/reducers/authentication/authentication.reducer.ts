import { produce } from 'immer'
import AuthenticationTypes from '@actions/authentication/AuthenticationActionsTypes'
import AuthenticationActions from '@actions/authentication/AuthenticationActions'
import { AuthenticationReducerState } from './authentication.reducer.types'

export const initialAuthState: AuthenticationReducerState = {
  user: null,
  loading: false,
  error: null,
}

const authenticationReducer = produce(
  (state: AuthenticationReducerState, action: AuthenticationActions) => {
    switch (action.type) {
      /* --------------------------------- ME --------------------------------- */
      case AuthenticationTypes.GET_ME_DATA_STARTED:
        state.loading = true
        state.error = null
        break

      case AuthenticationTypes.GET_ME_DATA_SUCCESS:
        state.user = action.payload.user

        state.loading = false
        state.error = null
        break

      case AuthenticationTypes.GET_ME_DATA_ERROR:
        state.loading = false
        state.error = action.payload
        break

      /* --------------------------------- LOGIN --------------------------------- */
      case AuthenticationTypes.LOGIN_STARTED:
        state.loading = true
        state.error = null
        break

      case AuthenticationTypes.LOGIN_SUCCESS:
        state.user = action.payload.user

        state.loading = false
        state.error = null
        break

      case AuthenticationTypes.LOGIN_ERROR:
        state.loading = false
        state.error = action.payload
        break

      /* --------------------------------- LOGOUT --------------------------------- */
      case AuthenticationTypes.LOGOUT_STARTED:
        state.loading = true
        state.error = null
        break

      case AuthenticationTypes.LOGOUT_SUCCESS:
        state.user = null

        state.loading = false
        state.error = null
        break

      case AuthenticationTypes.LOGOUT_ERROR:
        state.loading = false
        state.error = action.payload
        break

      default:
        return state
    }
  },
  initialAuthState,
)

export default authenticationReducer
