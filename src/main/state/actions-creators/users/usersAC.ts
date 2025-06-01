/*import Endpoints from '@lib/http-client/Endpoints'
import HttpMethods from '@lib/http-client/HttpMethods'
import UsersActions from '@actions/users/UsersActions'
import UsersTypes from '@actions/users/UsersActionsTypes'
import {
  CreateUserRequestBody,
  DeleteUserRequestBody,
  GetSingleUserRequestBody,
  UpdateUserRequestBody,
} from '@actions/users/UsersActions.payloads'
import {
  CreateUserRequestResponse,
  GetAllUsersRequestResponse,
  GetSingleUserRequestResponse,
  UpdateUserRequestResponse,
} from '@actions/users/UsersActions.responses'
import { TypedActionCreator } from '@actions-creators/interfaces/index.types'
import httpClient from '@lib/http-client/httpClient'
import { getErrorMessage } from '../../utils'

export const getAllUsers: TypedActionCreator<UsersActions> = () => async (dispatch) => {
  dispatch({
    type: UsersTypes.GET_ALL_USERS_STARTED,
  })
  try {
    const { data } = await httpClient<undefined, GetAllUsersRequestResponse>({
      endpoint: Endpoints.GET_USERS,
      method: HttpMethods.GET,
    })

    dispatch({
      type: UsersTypes.GET_ALL_USERS_SUCCESS,
      payload: data,
    })
  } catch (e) {
    dispatch({
      type: UsersTypes.GET_ALL_USERS_ERROR,
      payload: getErrorMessage(e),
    })
  }
}

export const getSingleUser: TypedActionCreator<UsersActions, GetSingleUserRequestBody> =
  (params) => async (dispatch) => {
    dispatch({
      type: UsersTypes.GET_SINGLE_USER_STARTED,
    })
    try {
      const { data } = await httpClient<
        GetSingleUserRequestBody,
        GetSingleUserRequestResponse
      >({
        endpoint: Endpoints.GET_ONE_USER,
        method: HttpMethods.GET,
        endpointVariables: {
          userId: params.id,
        },
      })

      dispatch({
        type: UsersTypes.GET_SINGLE_USER_SUCCESS,
        payload: data,
      })
    } catch (e) {
      dispatch({
        type: UsersTypes.GET_SINGLE_USER_ERROR,
        payload: getErrorMessage(e),
      })
    }
  }

export const createUser: TypedActionCreator<UsersActions, CreateUserRequestBody> =
  (params, cb) => async (dispatch) => {
    dispatch({
      type: UsersTypes.CREATE_USER_STARTED,
    })
    try {
      const { data } = await httpClient<CreateUserRequestBody, CreateUserRequestResponse>(
        {
          endpoint: Endpoints.CREATE_USER,
          method: HttpMethods.POST,
          body: params,
        },
      )

      dispatch({
        type: UsersTypes.CREATE_USER_SUCCESS,
        payload: data,
      })
      cb?.()
    } catch (e) {
      dispatch({
        type: UsersTypes.CREATE_USER_ERROR,
        payload: getErrorMessage(e),
      })
    }
  }

export const updateUser: TypedActionCreator<UsersActions, UpdateUserRequestBody> =
  (params, cb) => async (dispatch) => {
    dispatch({
      type: UsersTypes.UPDATE_USER_STARTED,
    })
    try {
      const { data } = await httpClient<UpdateUserRequestBody, UpdateUserRequestResponse>(
        {
          endpoint: Endpoints.UPDATE_USER,
          method: HttpMethods.PATCH,
          body: params,
          endpointVariables: {
            userId: params.id,
          },
        },
      )

      dispatch({
        type: UsersTypes.UPDATE_USER_SUCCESS,
        payload: data,
      })
      cb?.()
    } catch (e) {
      dispatch({
        type: UsersTypes.UPDATE_USER_ERROR,
        payload: getErrorMessage(e),
      })
    }
  }

export const deleteUser: TypedActionCreator<UsersActions, DeleteUserRequestBody> =
  (params, cb) => async (dispatch) => {
    dispatch({
      type: UsersTypes.DELETE_USER_STARTED,
    })
    try {
      await httpClient<DeleteUserRequestBody>({
        endpoint: Endpoints.DELETE_USER,
        method: HttpMethods.DELETE,
        endpointVariables: {
          userId: params.id,
        },
      })

      dispatch({
        type: UsersTypes.DELETE_USER_SUCCESS,
        payload: {
          userId: params.id,
        },
      })
      cb?.()
    } catch (e) {
      dispatch({
        type: UsersTypes.DELETE_USER_ERROR,
        payload: getErrorMessage(e),
      })
    }
  }
*/
