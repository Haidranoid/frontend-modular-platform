import type { ApiSchema } from '@webapp/shared'
import { httpClient } from '@webapp/shared'
import { Endpoints } from '#constants'
import {
  UsersOps,
  UsersState,
  CreateUserPayload,
  CreateUserSuccess,
} from '#types'

export const usersApi: ApiSchema<UsersState, UsersOps> = {
  createUser: {
    operation: async (credentials) => {
      //throw new Error('test')
      return await httpClient.post<CreateUserPayload, CreateUserSuccess>({
        endpoint: Endpoints.USERS,
        body: credentials,
        useAuthorization: false,
      })
    },
    onSuccess: (state, action) => {
      const { user } = action.payload

      state.user = user
    },
  }
}
