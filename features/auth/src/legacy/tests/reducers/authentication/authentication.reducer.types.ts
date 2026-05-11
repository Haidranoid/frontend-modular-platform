import { BaseReducerState } from '../app/app.reducer.types'
import { User } from '../../interfaces/authentication/authentication.types'

export interface AuthenticationReducerState extends BaseReducerState {
  user: User | null
}
