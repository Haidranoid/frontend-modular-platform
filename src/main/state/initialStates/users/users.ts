import { UsersReducerState } from '../../reducers/interfaces/users.reducer.types'

export const initialUsersReducerState: UsersReducerState = {
  user: null,
  users: [],
  loading: false,
  error: null,
}
