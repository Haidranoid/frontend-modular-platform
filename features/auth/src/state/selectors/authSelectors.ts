import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Base selector (raw slice from state)
const authSelector = (state: RootState) => state.auth

// Granular selectors
const memoizedSelectUserSession = createSelector([authSelector], (auth) => auth.session)
const memoizedSelectIsAuthenticatedFlag = createSelector(
  [authSelector],
  (auth) => auth.isAuthenticated,
)
const memoizedSelectIsLoading = createSelector([authSelector], (auth) => auth.isLoading)
const memoizedSelectError = createSelector([authSelector], (auth) => auth.error)

// Composed selectors
const memoizedIsAuthenticated = createSelector(
  [memoizedSelectUserSession, memoizedSelectIsAuthenticatedFlag],
  (userSession, isAuthenticatedFlag) => userSession && isAuthenticatedFlag,
)

const memoizedSelectReadyToRender = createSelector(
  [memoizedSelectIsLoading, memoizedSelectError],
  (isLoading, error) => !isLoading && !error,
)

export const userSessionSelector = memoizedSelectUserSession
export const isAuthenticatedSelector = memoizedIsAuthenticated
export const readyToRenderSelector = memoizedSelectReadyToRender
