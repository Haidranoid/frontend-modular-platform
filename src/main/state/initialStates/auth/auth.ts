import { AuthenticationReducerState } from '../../reducers/interfaces/authentication.reducer.types'

export const initialAuthState: AuthenticationReducerState = {
  user: null,
  loading: false,
  error: null,
}
