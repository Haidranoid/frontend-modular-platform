import type { Account } from '@webapp/shared'

export interface FetchAccountByIdPayload {
  id: number
}

export interface CreateAccountPayload {
  username: string
  password: string
}

export interface UpdateAccountPayload {
  id: number
  account: Account
}

export interface DeleteAccountPayload {
  id: number
}
