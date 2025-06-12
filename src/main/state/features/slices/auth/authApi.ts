import { AuthApi } from '@interfaces/features/api/api.types'
import httpClient from '@lib/http-client/httpClient'
import {
  GetMeSuccess,
  LoginSuccess,
} from '@interfaces/auth/responses/authResponses.types'
import { Endpoints } from '@constants'
import { LoginPayload } from '@interfaces/auth/payloads/authPayloads.types'
import AuthenticationService from '@lib/auth-service/AuthenticationService'

const authApi: AuthApi = {
  me: async () => {
    return await httpClient.get<GetMeSuccess>({
      endpoint: Endpoints.ME,
    })
  },
  login: async (credentials) => {
    const loginSuccess = await httpClient.post<LoginPayload, LoginSuccess>({
      endpoint: Endpoints.LOGIN,
      body: credentials,
      useAuthorization: false,
    })

    AuthenticationService.startSession(
      loginSuccess.accessToken,
      loginSuccess.refreshToken,
    )

    return loginSuccess
  },
  logout: async () => {
    await httpClient.delete({
      endpoint: Endpoints.LOGOUT,
    })

    AuthenticationService.closeSession()
  },
}

export default authApi
