import { Roles } from '@webapp/shared/constants'

export interface GetUserPayload {
  id: number
}

export interface CreateUserPayload {
  email: string
  password: string
  firstName: string
  lastName: string
  role: Roles
}

export interface UpdateUserPayload {
  id: number
  email: string
  password?: string
  firstName: string
  lastName: string
  role: Roles
}

export interface DeleteUserPayload {
  id: number
}
