import { configureAppStore } from '@webapp/shared'
import { accountsReducer } from '../reducer'

export const accountsStore = configureAppStore({
  reducers: {
    accounts: accountsReducer,
  },
})

export type RootState = ReturnType<typeof accountsStore.getState>
export type AppDispatch = typeof accountsStore.dispatch
