import type { User } from '@webapp/shared'

export interface FetchUsersSuccess {
  users: User[]
}

export interface FetchUserByIdSuccess {
  user: User
}

export interface CreateUserSuccess {
  accessToken: string
  refreshToken: string
  user: User
}

export interface UpdateUserSuccess {
  user: User
}

export interface DeleteUserSuccess {
  id: number
  user?: User
}
