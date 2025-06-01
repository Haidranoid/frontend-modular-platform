import { createSelector } from 'reselect'
import { AppReducerState } from '@reducers/interfaces/app.reducer.types'

// Base selector (raw data from state)
const selectUsers = (state: AppReducerState) => state.users

// Memoized selectors
export const selectAllUsers = createSelector([selectUsers], (users) => users.users)
export const selectSingleUser = createSelector([selectUsers], (users) => users.user)
export const selectUsersStatus = createSelector([selectUsers], (users) => ({
  loading: users.loading,
  error: users.error,
}))
