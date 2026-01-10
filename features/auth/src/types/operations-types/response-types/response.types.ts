import type { Account } from '@webapp/shared'

export type GetMeSuccess = Account

export interface LoginSuccess {
  accessToken: string
  refreshToken: string
  user: Account
}

export interface SignupSuccess {
  accessToken: string
  refreshToken: string
  user: Account
}
