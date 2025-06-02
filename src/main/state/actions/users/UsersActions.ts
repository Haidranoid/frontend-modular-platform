import UsersActionTypes from './UsersActionTypes'
import {
  CreateUserRequestResponse,
  DeleteUserRequestResponse,
  GetAllUsersRequestResponse,
  GetSingleUserRequestResponse,
  UpdateUserRequestResponse,
} from './UsersActions.responses'
import { Action, ErrorMessage } from '../interfaces/actions.types'

// -------------------------------- Get All Users -----------------------------------
interface GetAllUsersActionStarted extends Action {
  type: UsersActionTypes.GET_ALL_USERS_STARTED
}

interface GetAllUsersActionSuccess extends Action {
  type: UsersActionTypes.GET_ALL_USERS_SUCCESS
  payload: GetAllUsersRequestResponse
}

interface GetAllUsersActionError extends Action {
  type: UsersActionTypes.GET_ALL_USERS_ERROR
  payload: ErrorMessage
}

// ----------------------------- Get Single User --------------------------------
interface GetSingleUserActionStarted extends Action {
  type: UsersActionTypes.GET_SINGLE_USER_STARTED
}

interface GetSingleUserActionSuccess extends Action {
  type: UsersActionTypes.GET_SINGLE_USER_SUCCESS
  payload: GetSingleUserRequestResponse
}

interface GetSingleUserActionError extends Action {
  type: UsersActionTypes.GET_SINGLE_USER_ERROR
  payload: ErrorMessage
}

// -------------------------------- Create User -----------------------------------
interface CreateUserActionStarted extends Action {
  type: UsersActionTypes.CREATE_USER_STARTED
}

interface CreateUserActionSuccess extends Action {
  type: UsersActionTypes.CREATE_USER_SUCCESS
  payload: CreateUserRequestResponse
}

interface CreateUserActionError extends Action {
  type: UsersActionTypes.CREATE_USER_ERROR
  payload: ErrorMessage
}

// -------------------------------- Update User -----------------------------------
interface UpdateUserActionStarted extends Action {
  type: UsersActionTypes.UPDATE_USER_STARTED
}

interface UpdateUserActionSuccess extends Action {
  type: UsersActionTypes.UPDATE_USER_SUCCESS
  payload: UpdateUserRequestResponse
}

interface UpdateUserActionError extends Action {
  type: UsersActionTypes.UPDATE_USER_ERROR
  payload: ErrorMessage
}

// -------------------------------- Delete User -----------------------------------
interface DeleteUserActionStarted extends Action {
  type: UsersActionTypes.DELETE_USER_STARTED
}

interface DeleteUserActionSuccess extends Action {
  type: UsersActionTypes.DELETE_USER_SUCCESS
  payload: DeleteUserRequestResponse
}

interface DeleteUserActionError extends Action {
  type: UsersActionTypes.DELETE_USER_ERROR
  payload: ErrorMessage
}

// -------------------------------- UsersActions -------------------------------------
type UsersActions =
  | GetAllUsersActionStarted
  | GetAllUsersActionSuccess
  | GetAllUsersActionError
  | GetSingleUserActionStarted
  | GetSingleUserActionSuccess
  | GetSingleUserActionError
  | CreateUserActionStarted
  | CreateUserActionSuccess
  | CreateUserActionError
  | UpdateUserActionStarted
  | UpdateUserActionSuccess
  | UpdateUserActionError
  | DeleteUserActionStarted
  | DeleteUserActionSuccess
  | DeleteUserActionError

export default UsersActions
