/*import httpClient from '@lib/http-client/httpClient'
import Endpoints from '@lib/http-client/Endpoints'
import HttpMethods from '@lib/http-client/HttpMethods'
import { AuthenticationActions } from '@actions'
import AuthenticationService from '@lib/services/AuthenticationService'
import AuthenticationTypes from '@actions/authentication/AuthenticationActionsTypes'
import { LoginRequestBody } from '@actions/authentication/AuthenticationActions.payloads'
import {
  GetMeDataRequestResponse,
  LoginRequestResponse,
} from '@actions/authentication/AuthenticationActions.responses'
import { TypedActionCreator } from '@actions-creators/interfaces/index.types'
import { getErrorMessage } from '@state/utils'

export const me: TypedActionCreator<AuthenticationActions> =
  (_, cb) => async (dispatch) => {
    dispatch({
      type: AuthenticationTypes.GET_ME_DATA_STARTED,
    })

    try {
      const { data } = await httpClient<undefined, GetMeDataRequestResponse>({
        endpoint: Endpoints.ME,
        method: HttpMethods.GET,
      })

      dispatch({
        type: AuthenticationTypes.GET_ME_DATA_SUCCESS,
        payload: data,
      })
    } catch (e: unknown) {
      dispatch({
        type: AuthenticationTypes.GET_ME_DATA_ERROR,
        payload: getErrorMessage(e),
      })
    } finally {
      cb?.()
    }
  }

export const login: TypedActionCreator<AuthenticationActions, LoginRequestBody> =
  (params, cb) => async (dispatch) => {
    dispatch({
      type: AuthenticationTypes.LOGIN_STARTED,
    })

    try {
      const { data } = await httpClient<LoginRequestBody, LoginRequestResponse>({
        endpoint: Endpoints.LOGIN,
        method: HttpMethods.POST,
        body: params,
        useAuthorization: false,
      })

      const { accessToken, refreshToken } = data
      // save access and refresh token in local machine
      AuthenticationService.startSession(accessToken, refreshToken)

      dispatch({
        type: AuthenticationTypes.LOGIN_SUCCESS,
        payload: data,
      })

      cb?.()
    } catch (e: unknown) {
      dispatch({
        type: AuthenticationTypes.LOGIN_ERROR,
        payload: getErrorMessage(e),
      })
    }
  }

export const logout: TypedActionCreator<AuthenticationActions> =
  (_, cb) => async (dispatch) => {
    dispatch({
      type: AuthenticationTypes.LOGOUT_STARTED,
    })

    try {
      await httpClient({
        endpoint: Endpoints.LOGOUT,
        method: HttpMethods.POST,
      })

      // remove access and refresh token in local machine
      AuthenticationService.closeSession()

      dispatch({
        type: AuthenticationTypes.LOGOUT_SUCCESS,
      })

      cb?.()
    } catch (e) {
      dispatch({
        type: AuthenticationTypes.LOGOUT_ERROR,
        payload: getErrorMessage(e),
      })
    }
  }
*/
