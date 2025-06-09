import httpClient from '@lib/http-client/httpClient'
import { Endpoints } from '@constants'
import { CrudApi } from '@interfaces/features/api.types'
import { User } from '@interfaces/users/users.types'
import {
  CreateUserSuccess,
  GetAllUsersSuccess,
  GetUserSuccess,
  UpdateUserSuccess,
} from '@interfaces/users/responses/usersResponses.types'
import {
  CreateUserPayload,
  DeleteUserPayload,
  UpdateUserPayload,
} from '@interfaces/users/payloads/usersPayloads.types'

const usersApi: CrudApi<User> = {
  fetchAll: async () => {
    const { data } = await httpClient.get<GetAllUsersSuccess>({
      endpoint: Endpoints.GET_USERS,
    })

    return data
  },
  fetchById: async (id) => {
    const { data } = await httpClient.get<GetUserSuccess>({
      endpoint: Endpoints.GET_USER,
      endpointVariables: {
        userId: id,
      },
    })
    return data
  },
  create: async (payload) => {
    const { data } = await httpClient.post<CreateUserPayload, CreateUserSuccess>({
      endpoint: Endpoints.CREATE_USER,
      body: payload,
    })

    return data
  },
  update: async (id, payload) => {
    const { data } = await httpClient.patch<UpdateUserPayload, UpdateUserSuccess>({
      endpoint: Endpoints.UPDATE_USER,
      body: payload,
      endpointVariables: {
        userId: id,
      },
    })

    return data
  },
  delete: async (id) => {
    await httpClient.delete<DeleteUserPayload>({
      endpoint: Endpoints.DELETE_USER,
      endpointVariables: {
        userId: id,
      },
    })
  },
}

export default usersApi
