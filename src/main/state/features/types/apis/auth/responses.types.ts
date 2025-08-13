import { User } from '@features/types'

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
