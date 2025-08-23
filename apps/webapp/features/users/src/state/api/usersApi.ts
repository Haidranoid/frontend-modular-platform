import { httpClient } from '@webapp/shared'
import { Endpoints } from '@webapp/shared/constants'
import { User, CrudApi } from '@webapp/shared/types'
import { CreateUserPayload, UpdateUserPayload } from './payloads.types'
import {
  CreateUserSuccess,
  DeleteUserSuccess,
  GetAllUsersSuccess,
  GetUserSuccess,
  UpdateUserSuccess
} from './responses.types'

export const usersApi: CrudApi<User> = {
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
