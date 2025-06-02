import { AppReducerState } from '../reducers/interfaces/app.reducer.types'
import { initialGlobalState } from './globals/globals'
import { initialAuthState } from './auth/auth'
import { initialUsersReducerState } from './users/users'

const initialRootState: AppReducerState = {
  global: initialGlobalState,
  auth: initialAuthState,
  users: initialUsersReducerState,
}

export default initialRootState
