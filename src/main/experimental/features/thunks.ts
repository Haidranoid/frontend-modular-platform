import { createThunks, createThunk } from './createThunks'
import { LoginSuccess } from '@interfaces/auth/responses/authResponses.types'
import { LoginPayload } from '@interfaces/auth/payloads/authPayloads.types'
import httpClient from '@lib/http-client/httpClient'
import { Endpoints } from '@constants'
import AuthenticationService from '@lib/auth-service/AuthenticationService'

export const authThunks = createThunks({
  namespace: 'auth',
  thunks: {
    login: createThunk<LoginPayload, LoginSuccess>(async (args) => {
      const { data } = await httpClient.post<LoginPayload, LoginSuccess>({
        endpoint: Endpoints.LOGIN,
        body: args,
        useAuthorization: false,
      })

      AuthenticationService.startSession(data.accessToken, data.refreshToken)
      return data
    }),
  },
})
