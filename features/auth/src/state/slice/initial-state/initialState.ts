import { Account, BaseState } from '@webapp/shared'

//export type IsAuthenticatedStatus = boolean | 'unknown' | 'authenticated' | 'unauthenticated'

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
