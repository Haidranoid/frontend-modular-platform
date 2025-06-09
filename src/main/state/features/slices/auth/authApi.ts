import { AuthApi } from '@interfaces/features/api/api.types'
import httpClient from '@lib/http-client/httpClient'
import {
  GetMeSuccess,
  LoginSuccess,
} from '@interfaces/auth/responses/authResponses.types'
import { Endpoints } from '@constants'
import { LoginPayload } from '@interfaces/auth/payloads/authPayloads.types'
import AuthenticationService from '@lib/auth-service/AuthenticationService'

/*const authApi = {
  me: async (): Promise<GetMeSuccess> => { ... },
  login: async (payload: LoginPayload): Promise<LoginSuccess> => { ... },
  logout: async (): Promise<void> => { ... }
}

type AuthApi = typeof authApi
*/

const authApi: AuthApi = {
  me: async () => {
    const { data } = await httpClient.get<GetMeSuccess>({
      endpoint: Endpoints.ME,
    })

    return data
  },
  login: async (credentials) => {
    const { data } = await httpClient.post<LoginPayload, LoginSuccess>({
      endpoint: Endpoints.LOGIN,
      body: credentials,
      useAuthorization: false,
    })

    AuthenticationService.startSession(data.accessToken, data.refreshToken)

    return data
  },
  logout: async () => {
    await httpClient.delete({
      endpoint: Endpoints.LOGOUT,
    })

    AuthenticationService.closeSession()
  },
}

export default authApi
