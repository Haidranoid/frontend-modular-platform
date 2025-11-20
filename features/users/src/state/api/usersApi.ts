import type { ApiSchema } from '@webapp/shared'
import { httpClient } from '@webapp/shared'
import { Endpoints } from '#constants'
import {
  UsersOps,
  UsersState,
  FetchUsersSuccess,
  CreateUserPayload,
  FetchUserByIdSuccess,
  CreateUserSuccess,
  UpdateUserPayload,
  UpdateUserSuccess,
  DeleteUserSuccess,
} from '#types'

export const usersApi: ApiSchema<UsersState, UsersOps> = {
  fetchUsers: {
    operation: async () => {
      return await httpClient.get<FetchUsersSuccess>({
        endpoint: Endpoints.USERS,
      })
    },
    onSuccess: (state, action) => {
      const { users } = action.payload

      state.users = users
    },
  },
  fetchUserById: {
    operation: async (payload) => {
      return await httpClient.get<FetchUserByIdSuccess>({
        endpoint: Endpoints.USER_BY_ID,
        endpointVariables: payload,
      })
    },
    onSuccess: (state, action) => {
      const { user } = action.payload

      state.userById = user
    },
  },
  createUser: {
    operation: async (payload) => {
      return await httpClient.post<CreateUserPayload, CreateUserSuccess>({
        endpoint: Endpoints.USERS,
        body: payload,
      })
    },
    onSuccess: (state, action) => {
      const { user } = action.payload

      state.userById = user
    },
  },
  updateUser: {
    operation: async (payload) => {
      return await httpClient.patch<UpdateUserPayload, UpdateUserSuccess>({
        endpoint: Endpoints.USER_BY_ID,
        endpointVariables: payload,
        body: payload,
      })
    },
    onSuccess: (state, action) => {
      const { user } = action.payload

      state.userById = user
    },
  },
  deleteUser: {
    operation: async (payload) => {
      return await httpClient.delete<DeleteUserSuccess>({
        endpoint: Endpoints.USER_BY_ID,
        endpointVariables: payload,
      })
    },
    onSuccess: () => {
      //const { id, user } = action.payload
      //state.user = user
    },
  },
}
