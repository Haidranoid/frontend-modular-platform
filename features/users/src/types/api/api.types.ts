import type { User, ApiOperations } from '@webapp/shared'
import type { CreateUserPayload, CreateUserSuccess } from './request-types'

export interface UsersState {
  user: User | null
  users: User[]
}

export interface UsersOps extends ApiOperations {
  createUser: (credentials: CreateUserPayload) => Promise<CreateUserSuccess>
}
