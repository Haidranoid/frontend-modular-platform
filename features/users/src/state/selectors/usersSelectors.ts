import { createSelector } from 'reselect'
import { RootState } from '../store'

// Base selector (raw slice from state)
const baseSelector = (state: RootState) => state

// Granular selectors
const selectUsersUser = createSelector(baseSelector, (users) => users.user)
const selectUsersIsLoading = createSelector(baseSelector, (users) => users.isLoading)
const selectUsersError = createSelector(baseSelector, (users) => users.error)

// Composed selectors
const selectUsersStatus = createSelector(
  [selectUsersIsLoading, selectUsersError],
  (isLoading, error) => ({ isLoading, error }),
)

// Organized export
export const usersSelectors = {
  base: baseSelector,
  user: selectUsersUser,
  status: selectUsersStatus,
}
