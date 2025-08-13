import httpClient from '@lib/http-client/httpClient'
import { Endpoints } from '@constants'
import {
  AuthApi,
  LoginPayload,
  GetMeSuccess,
  LoginSuccess,
} from '@features/types/apis/auth'

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
