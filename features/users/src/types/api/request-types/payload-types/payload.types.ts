import type { User } from '@webapp/shared'

export interface FetchUserByIdPayload {
  id: number
}

export interface CreateUserPayload {
  username: string
  password: string
}

export interface UpdateUserPayload {
  id: number
  user: User
}

export interface DeleteUserPayload {
  id: number
}
