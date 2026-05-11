import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Base selector (raw slice from state)
const baseSelector = (state: RootState) => state.accounts

// Granular selectors
const selectAccountByIdAccount = createSelector(
  baseSelector,
  (accounts) => accounts.accountById,
)
const selectAccountsIsLoading = createSelector(
  baseSelector,
  (accounts) => accounts.isLoading,
)
const selectAccountsError = createSelector(baseSelector, (accounts) => accounts.error)

// Composed selectors
const selectAccountsStatus = createSelector(
  [selectAccountsIsLoading, selectAccountsError],
  (isLoading, error) => ({ isLoading, error }),
)

// Organized export
export const accountsSelectors = {
  base: baseSelector,
  accountById: selectAccountByIdAccount,
  status: selectAccountsStatus,
}
