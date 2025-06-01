import UsersTypes from './UsersActionsTypes'
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
  type: UsersTypes.GET_ALL_USERS_STARTED
}

interface GetAllUsersActionSuccess extends Action {
  type: UsersTypes.GET_ALL_USERS_SUCCESS
  payload: GetAllUsersRequestResponse
}

interface GetAllUsersActionError extends Action {
  type: UsersTypes.GET_ALL_USERS_ERROR
  payload: ErrorMessage
}

// ----------------------------- Get Single User --------------------------------
interface GetSingleUserActionStarted extends Action {
  type: UsersTypes.GET_SINGLE_USER_STARTED
}

interface GetSingleUserActionSuccess extends Action {
  type: UsersTypes.GET_SINGLE_USER_SUCCESS
  payload: GetSingleUserRequestResponse
}

interface GetSingleUserActionError extends Action {
  type: UsersTypes.GET_SINGLE_USER_ERROR
  payload: ErrorMessage
}

// -------------------------------- Create User -----------------------------------
interface CreateUserActionStarted extends Action {
  type: UsersTypes.CREATE_USER_STARTED
}

interface CreateUserActionSuccess extends Action {
  type: UsersTypes.CREATE_USER_SUCCESS
  payload: CreateUserRequestResponse
}

interface CreateUserActionError extends Action {
  type: UsersTypes.CREATE_USER_ERROR
  payload: ErrorMessage
}

// -------------------------------- Update User -----------------------------------
interface UpdateUserActionStarted extends Action {
  type: UsersTypes.UPDATE_USER_STARTED
}

interface UpdateUserActionSuccess extends Action {
  type: UsersTypes.UPDATE_USER_SUCCESS
  payload: UpdateUserRequestResponse
}

interface UpdateUserActionError extends Action {
  type: UsersTypes.UPDATE_USER_ERROR
  payload: ErrorMessage
}

// -------------------------------- Delete User -----------------------------------
interface DeleteUserActionStarted extends Action {
  type: UsersTypes.DELETE_USER_STARTED
}

interface DeleteUserActionSuccess extends Action {
  type: UsersTypes.DELETE_USER_SUCCESS
  payload: DeleteUserRequestResponse
}

interface DeleteUserActionError extends Action {
  type: UsersTypes.DELETE_USER_ERROR
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
