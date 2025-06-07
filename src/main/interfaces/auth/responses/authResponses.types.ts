import { User } from '@interfaces/users/users.types'

export interface GetMeSuccess {
  user: User
}

export interface Tokens {
  accessToken: string
  refreshToken: string
}

export interface LoginSuccess extends Tokens {
  user: User
}
