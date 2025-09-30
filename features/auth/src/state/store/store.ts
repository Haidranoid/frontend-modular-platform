import { configureAppStore } from '@webapp/shared'
import { authReducer, initialAuthState } from '../reducer'

// ============ setting store from rootReducer and initialState ================
export const store = configureAppStore({
  rootReducer: authReducer,
  initialState: initialAuthState,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
