import { AuthApi } from '@interfaces/features/api/api.types'
import httpClient from '@lib/http-client/httpClient'
import {
  GetMeSuccess,
  LoginSuccess,
} from '@interfaces/auth/responses/authResponses.types'
import { Endpoints } from '@constants'
import { LoginPayload } from '@interfaces/auth/payloads/authPayloads.types'

const authApi: AuthApi = {
  me: async () => {
    return await httpClient.get<GetMeSuccess>({
      endpoint: Endpoints.ME,
    })
  },
  login: async (credentials) => {
    return await httpClient.post<LoginPayload, LoginSuccess>({
      endpoint: Endpoints.LOGIN,
      body: credentials,
      useAuthorization: false,
    })
  },
  logout: async () => {
    return await httpClient.delete({
      endpoint: Endpoints.LOGOUT,
    })
  },
}

export default authApi
