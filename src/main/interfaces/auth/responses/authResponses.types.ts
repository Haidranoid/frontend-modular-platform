import { User } from '../../users/users.types'

export interface GetMeSuccess {
  user: User
}

export interface LoginSuccess {
  accessToken: string
  refreshToken: string
  user: User
}
