import { configureAppStore } from '@webapp/shared'
import { authReducer } from '@webapp/auth'
import { accountsReducer } from '../slice'

const store = configureAppStore({
  reducers: {
    accounts: accountsReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store as accountsStore }
