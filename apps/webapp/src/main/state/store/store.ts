import { configureAppStore } from '@webapp/shared'
import { authReducer } from '@webapp/auth'
import { accountsReducer } from '@webapp/accounts'

export const store = configureAppStore({
  reducers: {
    auth: authReducer,
    accounts: accountsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store as webappStore }
