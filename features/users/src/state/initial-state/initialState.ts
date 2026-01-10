import type { Account, BaseState } from '@webapp/shared'

export interface AccountsState extends BaseState {
  accountById: Account | null
  accountsList: Account[]
}

export const initialState: AccountsState = {
  accountById: null,
  accountsList: [],
  isLoading: false,
  error: null,
}
