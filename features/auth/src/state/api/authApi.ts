import { AuthenticationService, httpClient, ApiOperations, ApiSchema } from '@webapp/shared'
import { Endpoints } from '#constants'
import type { AuthState } from '../slice'
import type {
  LoginPayload,
  SignupPayload,
  LoginSuccess,
  SignupSuccess,
  GetMeSuccess,
} from './request-types'

export interface AuthOps extends ApiOperations {
  me: () => Promise<GetMeSuccess>
  login: (credentials: LoginPayload) => Promise<LoginSuccess>
  signup: (credentials: SignupPayload) => Promise<SignupSuccess>
  logout: () => Promise<void>
}

export const authApi: ApiSchema<AuthState, AuthOps> = {
  me: {
    operation: async () => {
      return await httpClient.get<GetMeSuccess>({
        endpoint: Endpoints.ME,
      })
    },
    onSuccess: (state, action) => {
      state.user = action.payload
    },
  },
  login: {
    operation: async (credentials) => {
      //throw new Error('test')
      return await httpClient.post<LoginPayload, LoginSuccess>({
        endpoint: Endpoints.LOGIN,
        body: credentials,
        useAuthorization: false,
      })
    },
    onSuccess: (state, action) => {
      const { user, accessToken, refreshToken } = action.payload

      state.isAuthenticated = true
      state.user = user
      AuthenticationService.startSession(accessToken, refreshToken)
    },
  },
  signup: {
    operation: async (credentials) => {
      return await httpClient.post<SignupPayload, SignupSuccess>({
        endpoint: Endpoints.SIGNUP,
        body: credentials,
        useAuthorization: false,
      })
    },
    onSuccess: (state, action) => {
      const { user, accessToken, refreshToken } = action.payload

      state.isAuthenticated = true
      state.user = user
      AuthenticationService.startSession(accessToken, refreshToken)
    },
  },
  logout: {
    operation: async () => {
      return await httpClient.delete({
        endpoint: Endpoints.LOGOUT,
      })
    },
    onSuccess: (state) => {
      state.user = null
      AuthenticationService.closeSession()
    },
  },
}
