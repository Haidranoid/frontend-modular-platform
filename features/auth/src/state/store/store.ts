import { configureAppStore } from '@webapp/shared'
import { authReducer } from '../slice'

const store = configureAppStore({
  reducers: {
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store as authStore }
