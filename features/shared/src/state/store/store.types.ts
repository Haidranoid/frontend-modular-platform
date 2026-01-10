import type { Account } from '#types'

export interface AuthState {
  session: Account | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface WebappRootState {
  auth: AuthState
}
