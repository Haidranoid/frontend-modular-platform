import { configureAppStore } from '@webapp/shared'
import { appReducer, initialAppState } from '../reducer'

export const store = configureAppStore<ReturnType<typeof appReducer>>({
  rootReducer: appReducer,
  initialState: initialAppState,
})
