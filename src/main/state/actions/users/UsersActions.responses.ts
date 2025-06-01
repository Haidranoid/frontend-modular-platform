import { User } from '../interfaces/authentication.types'

export interface GetAllUsersRequestResponse {
  users: User[]
}

export interface GetSingleUserRequestResponse {
  user: User
}

export interface CreateUserRequestResponse {
  user: User
}

export interface UpdateUserRequestResponse {
  user: User
}

export interface DeleteUserRequestResponse {
  userId: number
}
