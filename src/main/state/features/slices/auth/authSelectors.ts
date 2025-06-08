import { createSelector } from 'reselect'
import { RootState } from '@store'

// Base selector (raw slice from state)
const selectAuth = (state: RootState) => state.auth

// Granular selectors
const selectAuthUser = createSelector(selectAuth, (auth) => auth.user)
const selectAuthIsLoading = createSelector(selectAuth, (auth) => auth.isLoading)
const selectAuthError = createSelector(selectAuth, (auth) => auth.error)

// Composed selectors
const selectIsAuthenticated = createSelector(selectAuthUser, (user) => user !== null)
const selectAuthStatus = createSelector(
  [selectAuthIsLoading, selectAuthError],
  (isLoading, error) => ({ isLoading, error }),
)

// Organized export
export const authSelectors = {
  base: selectAuth,
  user: selectAuthUser,
  loading: selectAuthIsLoading,
  error: selectAuthError,
  isAuthenticated: selectIsAuthenticated,
  status: selectAuthStatus,
}
