import { createSelector } from 'reselect'

// Base selector (raw data from state)
const selectAuth = (state: AppReducerState) => state.auth

// Memoized selectors
export const selectCurrentUser = createSelector([selectAuth], (auth) => auth.user)
export const selectIsAuthenticated = createSelector(
  [selectAuth],
  (auth) => auth.user !== null,
)
export const selectAuthStatus = createSelector([selectAuth], (auth) => ({
  loading: auth.loading,
  error: auth.error,
}))
