import httpClient from '@lib/http-client/httpClient'
import { Endpoints } from '@constants'
import { CrudApi } from '@features/types/apis'
import { User } from '@features/types'
import {
  CreateUserSuccess,
  DeleteUserSuccess,
  GetAllUsersSuccess,
  GetUserSuccess,
  UpdateUserSuccess,
  CreateUserPayload,
  UpdateUserPayload,
} from '@features/types/apis/users'

const usersApi: CrudApi<User> = {
  fetchAll: async () => {
    return await httpClient.get<GetAllUsersSuccess>({
      endpoint: Endpoints.GET_USERS,
    })
  },
  fetchById: async (id) => {
    return await httpClient.get<GetUserSuccess>({
      endpoint: Endpoints.GET_USER,
      endpointVariables: {
        userId: id,
      },
    })
  },
  create: async (payload) => {
    return await httpClient.post<CreateUserPayload, CreateUserSuccess>({
      endpoint: Endpoints.CREATE_USER,
      body: payload,
    })
  },
  update: async (payload) => {
    return await httpClient.patch<UpdateUserPayload, UpdateUserSuccess>({
      endpoint: Endpoints.UPDATE_USER,
      body: payload,
      endpointVariables: {
        userId: payload.id,
      },
    })
  },
  delete: async (id) => {
    await httpClient.delete<DeleteUserSuccess>({
      endpoint: Endpoints.DELETE_USER,
      endpointVariables: {
        userId: id,
      },
    })
  },
}

export default usersApi
