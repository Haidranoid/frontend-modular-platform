import { User } from '../interfaces/authentication.types'

export interface GetMeDataRequestResponse {
  user: User
}

export interface LoginRequestResponse {
  accessToken: string
  refreshToken: string
  user: User
}
