import { createSelector } from 'reselect'
import { RootState } from '../store'

// Base selector (raw slice from state)
const baseSelector = (state: RootState) => state

// Granular selectors
const selectAuthUser = createSelector(baseSelector, (auth) => auth.user)
const selectAuthIsLoading = createSelector(baseSelector, (auth) => auth.isLoading)
const selectAuthError = createSelector(baseSelector, (auth) => auth.error)

// Composed selectors
const selectIsAuthenticated = createSelector(selectAuthUser, (user) => user !== null)
const selectAuthStatus = createSelector(
  [selectAuthIsLoading, selectAuthError],
  (isLoading, error) => ({ isLoading, error }),
)

// Organized export
export const authSelectors = {
  base: baseSelector,
  user: selectAuthUser,
  isAuthenticated: selectIsAuthenticated,
  status: selectAuthStatus,
}
