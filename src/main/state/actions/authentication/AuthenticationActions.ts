import AuthenticationActionTypes from './AuthenticationActionTypes'
import { Action, ErrorMessage } from '../interfaces/actions.types'
import {
  GetMeDataRequestResponse,
  LoginRequestResponse,
} from './AuthenticationActionResponses'

// --------------------------------- Get Me Data ------------------------------------
interface GetMeDataStarted extends Action {
  type: AuthenticationActionTypes.GET_ME_DATA_STARTED
}

interface GetMeDataSuccess extends Action {
  type: AuthenticationActionTypes.GET_ME_DATA_SUCCESS
  payload: GetMeDataRequestResponse
}

interface GetMeDataError extends Action {
  type: AuthenticationActionTypes.GET_ME_DATA_ERROR
  payload: ErrorMessage
}

// ------------------------------------ Login ---------------------------------------
interface LoginActionStarted extends Action {
  type: AuthenticationActionTypes.LOGIN_STARTED
}

interface LoginActionSuccess extends Action {
  type: AuthenticationActionTypes.LOGIN_SUCCESS
  payload: LoginRequestResponse
}

interface LoginActionError extends Action {
  type: AuthenticationActionTypes.LOGIN_ERROR
  payload: ErrorMessage
}

// ------------------------------------ Logout ---------------------------------------
interface LogoutActionStarted extends Action {
  type: AuthenticationActionTypes.LOGOUT_STARTED
}

interface LogoutActionSuccess extends Action {
  type: AuthenticationActionTypes.LOGOUT_SUCCESS
}

interface LogoutActionError extends Action {
  type: AuthenticationActionTypes.LOGOUT_ERROR
  payload: ErrorMessage
}

// ---------------------------------- AuthActions -------------------------------------
type AuthenticationActions =
  | GetMeDataStarted
  | GetMeDataSuccess
  | GetMeDataError
  | LoginActionStarted
  | LoginActionSuccess
  | LoginActionError
  | LogoutActionStarted
  | LogoutActionSuccess
  | LogoutActionError

export default AuthenticationActions
