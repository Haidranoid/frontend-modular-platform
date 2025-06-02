import { BaseReducerState } from './app.reducer.types'
import { User } from '../../actions/interfaces/authentication.types'

export interface AuthenticationReducerState extends BaseReducerState {
  user: User | null
}
