import type { EnhancedStore, Action } from '@reduxjs/toolkit'
import { configureAppStore } from '@webapp/shared'
import { authReducer, initialAuthState, InitialAuthState } from '../reducer'
import { authSlice } from '../slice'

export const store = configureAppStore({
  rootReducer: authReducer,
  initialState: initialAuthState,
}) as EnhancedStore<InitialAuthState, Action>

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const actions = authSlice.withDispatch(store.dispatch)
