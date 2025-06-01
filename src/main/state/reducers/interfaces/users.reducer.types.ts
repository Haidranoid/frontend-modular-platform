import { BaseReducerState } from './app.reducer.types'
import { User } from '../../actions/interfaces/authentication.types'

export interface UsersReducerState extends BaseReducerState {
  user: User | null
  users: Array<User>
}
