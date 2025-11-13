import type { User } from '@webapp/shared'

export interface CreateUserSuccess {
  accessToken: string
  refreshToken: string
  user: User
}
