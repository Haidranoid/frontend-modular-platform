import { produce } from 'immer'
import { AuthenticationActions, AuthenticationActionTypes } from '@actions'
import { AuthenticationReducerState } from '../interfaces/authentication.reducer.types'

export const initialAuthState: AuthenticationReducerState = {
  user: null,
  loading: false,
  error: null,
}

const authenticationReducer = produce(
  (state: AuthenticationReducerState, action: AuthenticationActions) => {
    switch (action.type) {
      /* --------------------------------- ME --------------------------------- */
      case AuthenticationActionTypes.GET_ME_DATA_STARTED:
        state.loading = true
        state.error = null
        break

      case AuthenticationActionTypes.GET_ME_DATA_SUCCESS:
        state.user = action.payload.user

        state.loading = false
        state.error = null
        break

      case AuthenticationActionTypes.GET_ME_DATA_ERROR:
        state.loading = false
        state.error = action.payload
        break

      /* --------------------------------- LOGIN --------------------------------- */
      case AuthenticationActionTypes.LOGIN_STARTED:
        state.loading = true
        state.error = null
        break

      case AuthenticationActionTypes.LOGIN_SUCCESS:
        state.user = action.payload.user

        state.loading = false
        state.error = null
        break

      case AuthenticationActionTypes.LOGIN_ERROR:
        state.loading = false
        state.error = action.payload
        break

      /* --------------------------------- LOGOUT --------------------------------- */
      case AuthenticationActionTypes.LOGOUT_STARTED:
        state.loading = true
        state.error = null
        break

      case AuthenticationActionTypes.LOGOUT_SUCCESS:
        state.user = null

        state.loading = false
        state.error = null
        break

      case AuthenticationActionTypes.LOGOUT_ERROR:
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
