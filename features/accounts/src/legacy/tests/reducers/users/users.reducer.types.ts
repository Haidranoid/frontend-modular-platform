import { BaseReducerState } from '../app/app.reducer.types'
import { User } from '../../interfaces/authentication/authentication.types'

export interface UsersReducerState extends BaseReducerState {
  user: User | null
  users: Array<User>
}
