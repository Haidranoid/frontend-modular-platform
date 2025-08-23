import { createSelector } from 'reselect'
//import { RootState } from '@store'

interface RootState {
    global: {
        init: object
        reboot: object
        shutdown: object
        isLoading: boolean
        error: string
    }
}

// Base selector (raw slice from state)
const selectGlobal = (state: RootState) => state.global

// Granular selectors
const selectGlobalInit = createSelector(selectGlobal, (global) => global.init)
const selectGlobalReboot = createSelector(selectGlobal, (global) => global.reboot)
const selectGlobalShutdown = createSelector(selectGlobal, (global) => global.shutdown)
const selectAuthIsLoading = createSelector(selectGlobal, (auth) => auth.isLoading)
const selectAuthError = createSelector(selectGlobal, (auth) => auth.error)

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
  base: selectGlobal,
  flow: selectGlobalFlow,
  status: selectGlobalStatus,
}
