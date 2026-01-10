import { configureAppStore } from '@webapp/shared'
import { authReducer } from '../reducer'

export const authStore = configureAppStore({
  reducers: {
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof authStore.getState>
export type AppDispatch = typeof authStore.dispatch
