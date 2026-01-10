import { Account, BaseState } from '@webapp/shared'

export interface AuthState extends BaseState {
  session: Account | null
  isAuthenticated: boolean
}

export const initialState: AuthState = {
  session: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
}
