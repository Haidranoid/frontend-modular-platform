import AuthenticationActions from '../authentication/AuthenticationActions'
import UsersActions from '../users/UsersActions'
import GlobalActions from '../global/GlobalActions'
import AuthenticationActionTypes from '../authentication/AuthenticationActionTypes'
import GlobalActionTypes from '../global/GlobalActionTypes'
import UsersActionsTypes from '../users/UsersActionsTypes'

export type ApplicationActions = AuthenticationActions | GlobalActions | UsersActions

export type ApplicationTypes =
  | AuthenticationActionTypes
  | GlobalActionTypes
  | UsersActionsTypes

// ------------------------------------------------------------------------------------
export type ActionTypes = ApplicationTypes
export type ActionPayload = object | undefined | string

export type ErrorMessage = string

export interface Action {
  type: ActionTypes
  payload?: ActionPayload
}
