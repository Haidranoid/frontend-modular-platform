import { Roles } from '@constants'

export interface GetSingleUserRequestBody {
  id: number
}

export interface CreateUserRequestBody {
  email: string
  password: string
  firstName: string
  lastName: string
  role: Roles
}

export interface UpdateUserRequestBody {
  id: number
  email: string
  password?: string
  firstName: string
  lastName: string
  role: Roles
}

export interface DeleteUserRequestBody {
  id: number
}
