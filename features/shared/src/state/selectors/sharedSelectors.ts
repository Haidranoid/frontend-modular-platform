import { createSelector } from '@reduxjs/toolkit'
import { WebappRootState } from '../store'

// Base selector (raw slice from state)
const authSelector = (state: WebappRootState) => state.auth

// Granular selectors
const memoizedSelectUserSession = createSelector([authSelector], (auth) => auth.session)
const memoizedSelectIsAuthenticatedFlag = createSelector(
  [authSelector],
  (auth) => auth.isAuthenticated,
)

// Composed selectors
const memoizedIsAuthenticated = createSelector(
  [memoizedSelectUserSession, memoizedSelectIsAuthenticatedFlag],
  (userSession, isAuthenticatedFlag) => userSession && isAuthenticatedFlag,
)

export const userSessionSelector = memoizedSelectUserSession
export const isAuthenticatedSelector = memoizedIsAuthenticated
