import type { User } from '@webapp/shared'

export type GetMeSuccess = User

export interface LoginSuccess {
  accessToken: string
  refreshToken: string
  user: User
}

export interface SignupSuccess {
  accessToken: string
  refreshToken: string
  user: User
}
