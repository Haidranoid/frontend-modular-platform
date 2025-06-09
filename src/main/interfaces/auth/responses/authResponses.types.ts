import { User } from '@interfaces/users/users.types'

export type GetMeSuccess = User

export interface LoginSuccess {
  accessToken: string
  refreshToken: string
  user: User
}
