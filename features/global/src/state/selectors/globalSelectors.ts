import { createSelector } from 'reselect'
import { RootState } from '../store'

// Base selector (raw slice from state)
const baseSelector = (state: RootState) => state

// Granular selectors
const selectGlobalInit = createSelector(baseSelector, (global) => global.init)
const selectGlobalReboot = createSelector(baseSelector, (global) => global.reboot)
const selectGlobalShutdown = createSelector(baseSelector, (global) => global.shutdown)
const selectAuthIsLoading = createSelector(baseSelector, (auth) => auth.isLoading)
const selectAuthError = createSelector(baseSelector, (auth) => auth.error)

// Composed selectors
const selectGlobalFlow = createSelector(
  [selectGlobalInit, selectGlobalReboot, selectGlobalShutdown],
  (init, reboot, shutdown) => ({ init, reboot, shutdown }),
)
const selectGlobalStatus = createSelector(
  [selectAuthIsLoading, selectAuthError],
  (isLoading, error) => ({ isLoading, error }),
)

// Organized export
export const globalSelectors = {
  base: baseSelector,
  flow: selectGlobalFlow,
  status: selectGlobalStatus,
}
