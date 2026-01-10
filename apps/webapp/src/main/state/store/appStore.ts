import { configureAppStore } from '@webapp/shared'
import { authReducer } from '@webapp/auth'
import { accountsReducer } from '@webapp/users'

export const appStore = configureAppStore({
  reducers: {
    auth: authReducer,
    accounts: accountsReducer,
  },
})

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
