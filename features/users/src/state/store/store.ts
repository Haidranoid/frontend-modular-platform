import { configureAppStore } from '@webapp/shared'
import { usersReducer, initialUsersState } from '../reducer'

// ============ setting store from rootReducer and initialState ================
export const store = configureAppStore({
  rootReducer: usersReducer,
  initialState: initialUsersState,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
