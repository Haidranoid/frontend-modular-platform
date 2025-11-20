import type { User, ApiOperations } from '@webapp/shared'
import {
  FetchUsersSuccess,
  FetchUserByIdPayload,
  FetchUserByIdSuccess,
  CreateUserPayload,
  CreateUserSuccess,
  UpdateUserPayload,
  UpdateUserSuccess,
  DeleteUserPayload,
  DeleteUserSuccess,
} from './request-types'

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
