import type { Account } from '@webapp/shared'

export interface FetchAccountsSuccess {
  accounts: Account[]
}

export interface FetchAccountByIdSuccess {
  account: Account
}

export interface CreateAccountSuccess {
  account: Account
}

export interface UpdateAccountSuccess {
  account: Account
}

export interface DeleteAccountSuccess {
  id: number
  account?: Account
}
