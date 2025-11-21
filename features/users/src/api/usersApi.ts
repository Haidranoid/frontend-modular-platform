import type { User, ApiOperations, ApiSchema } from '@webapp/shared'
import { httpClient } from '@webapp/shared'
import { Endpoints } from '#constants'
import {
  FetchUsersSuccess,
  CreateUserPayload,
  FetchUserByIdSuccess,
  CreateUserSuccess,
  UpdateUserPayload,
  UpdateUserSuccess,
  DeleteUserSuccess,
  FetchUserByIdPayload,
  DeleteUserPayload,
} from "#types";

export interface UsersState {
  userById: User | null
  users: User[]
}

export interface UsersOps extends ApiOperations {
  fetchUsers: () => Promise<FetchUsersSuccess>
  fetchUserById: (payload: FetchUserByIdPayload) => Promise<FetchUserByIdSuccess>
  createUser: (payload: CreateUserPayload) => Promise<CreateUserSuccess>
  updateUser: (payload: UpdateUserPayload) => Promise<UpdateUserSuccess>
  deleteUser: (payload: DeleteUserPayload) => Promise<DeleteUserSuccess>
}

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
