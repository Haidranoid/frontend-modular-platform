import { configureStore } from '@reduxjs/toolkit'
import { appReducer, initialAppState } from '../reducer'

export const store = configureStore({
  reducer: appReducer,
  preloadedState: initialAppState,
})
