import { User } from '../users.types'

export interface GetAllUsersSuccess {
  users: User[]
}

export interface GetUserSuccess {
  user: User
}

export interface CreateUserSuccess {
  user: User
}

export interface UpdateUserSuccess {
  user: User
}

export interface DeleteUserSuccess {
  userId: number
}
