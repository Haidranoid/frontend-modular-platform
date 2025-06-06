import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginPayload } from '@interfaces/auth/payloads/authPayloads.types'
import { GetMeSuccess } from '@interfaces/auth/responses/authResponses.types'
import { LoginSuccess } from '@interfaces/auth/responses/authResponses.types'
import { Endpoints } from '@constants'
import httpClient from '@lib/http-client/httpClient'
import AuthenticationService from '@lib/auth-service/AuthenticationService'

export const me = createAsyncThunk<GetMeSuccess>(
  'auth/me',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await httpClient.get<GetMeSuccess>({
        endpoint: Endpoints.ME,
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
      const { data } = await httpClient.post<LoginPayload, LoginSuccess>({
        endpoint: Endpoints.LOGIN,
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
    await httpClient.delete({
      endpoint: Endpoints.LOGOUT,
    })

    // remove access and refresh token in local machine
    AuthenticationService.closeSession()
  } catch (e) {
    return rejectWithValue(e)
  }
})
