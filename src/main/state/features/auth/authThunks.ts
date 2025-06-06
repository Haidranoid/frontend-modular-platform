import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginPayload } from '@interfaces/auth/payloads/authPayloads.types'
import { GetMeSuccess } from '@interfaces/auth/responses/authResponses.types'
import { LoginSuccess } from '@interfaces/auth/responses/authResponses.types'
import { Endpoints, HttpMethods } from '@constants'
import httpClient from '@lib/http-client/httpClient'
import AuthenticationService from '@lib/auth-service/AuthenticationService'

export const me = createAsyncThunk<GetMeSuccess>(
  'auth/me',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await httpClient<GetMeSuccess>({
        endpoint: Endpoints.ME,
        method: HttpMethods.GET,
      })

      return data
    } catch (e: unknown) {
      return rejectWithValue(e)
    }
  },
)

export const login = createAsyncThunk<LoginSuccess, LoginPayload>(
  'auth/login',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await httpClient<LoginSuccess, LoginPayload>({
        endpoint: Endpoints.LOGIN,
        method: HttpMethods.POST,
        body: arg,
        useAuthorization: false,
      })

      const { accessToken, refreshToken } = data
      // save access and refresh token in local machine
      AuthenticationService.startSession(accessToken, refreshToken)

      return data
    } catch (e: unknown) {
      return rejectWithValue(e)
    }
  },
)

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await httpClient({
      endpoint: Endpoints.LOGOUT,
      method: HttpMethods.POST,
    })

    // remove access and refresh token in local machine
    AuthenticationService.closeSession()
  } catch (e) {
    return rejectWithValue(e)
  }
})
