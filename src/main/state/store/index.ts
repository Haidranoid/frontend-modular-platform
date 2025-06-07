import { configureStore, Tuple } from '@reduxjs/toolkit'
import {
  appReducer,
  initialAppState,
  InitialAppState,
} from '@features/app-reducer/app.reducer'
import logger from 'redux-logger'

export const configureAppStore = (preloadedState: InitialAppState = initialAppState) => {
  return configureStore({
    reducer: appReducer,
    preloadedState,
    middleware: () => new Tuple(logger),
    devTools: {
      name: 'Redux Devtools',
      shouldHotReload: false,
    },
  })
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const store = configureAppStore()
export default store
