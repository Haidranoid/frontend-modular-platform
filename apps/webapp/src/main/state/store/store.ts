import { configureAppStore } from '@webapp/shared'
import { appReducer, initialAppState } from '../reducer'

export const store = configureAppStore({
  rootReducer: appReducer,
  initialState: initialAppState,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
