import type { ApiSchema, ApiOperations } from '@webapp/shared'
import { AuthenticationService, httpClient } from '@webapp/shared'
import type { AuthState } from '#state'
import { Endpoints } from '#constants'
import {
  GetMeSuccess,
  LoginPayload,
  LoginSuccess,
  SignupPayload,
  SignupSuccess,
} from '#types'

export interface AuthApiOperations extends ApiOperations {
  me: () => Promise<GetMeSuccess>
  login: (credentials: LoginPayload) => Promise<LoginSuccess>
  signup: (credentials: SignupPayload) => Promise<SignupSuccess>
  logout: () => Promise<void>
}

export type AuthApi = ApiSchema<AuthState, AuthApiOperations>

export const authApi: AuthApi = {
  me: {
    httpRequest: async () => {
      return await httpClient.get<GetMeSuccess>({
        endpoint: Endpoints.ME,
      })
    },
    onSuccess: (state, action) => {
      state.session = action.payload
      state.isAuthenticated = true
    },
  },
  login: {
    httpRequest: async (credentials) => {
      return await httpClient.post<LoginPayload, LoginSuccess>({
        endpoint: Endpoints.LOGIN,
        body: credentials,
        useAuthorization: false,
      })
    },
    onSuccess: (state, action) => {
      const { user, accessToken, refreshToken } = action.payload

      state.isAuthenticated = true
      state.session = user
      AuthenticationService.startSession(accessToken, refreshToken)
    },
  },
  signup: {
    httpRequest: async (credentials) => {
      return await httpClient.post<SignupPayload, SignupSuccess>({
        endpoint: Endpoints.SIGNUP,
        body: credentials,
        useAuthorization: false,
      })
    },
    onSuccess: (state, action) => {
      const { user, accessToken, refreshToken } = action.payload

      state.isAuthenticated = true
      state.session = user
      AuthenticationService.startSession(accessToken, refreshToken)
    },
  },
  logout: {
    httpRequest: async () => {
      return await httpClient.delete({
        endpoint: Endpoints.LOGOUT,
      })
    },
    onSuccess: (state) => {
      state.session = null
      AuthenticationService.closeSession()
    },
  },
}
