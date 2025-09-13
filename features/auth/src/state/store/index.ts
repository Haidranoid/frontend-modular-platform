import { configureAppStore } from '@webapp/shared'
import { authReducer, initialAuthState } from '../reducer'

export const store = configureAppStore({
  reducer: authReducer,
  initialState: initialAuthState,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
