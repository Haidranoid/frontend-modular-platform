import { httpClient } from '@webapp/shared'
import { Endpoints } from '@webapp/shared/constants'
import { AuthApi } from './authApi.types'
import { LoginPayload, SignupPayload } from './payloads.types'
import { GetMeSuccess, LoginSuccess, SignupSuccess} from './responses.types'

export const authApi: AuthApi = {
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
  signup: async (credentials) => {
    return await httpClient.post<SignupPayload, SignupSuccess>({
      endpoint: Endpoints.SIGNUP,
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

