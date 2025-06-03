import { configureStore, Tuple } from '@reduxjs/toolkit'
import { AppReducerState } from '../types/index.types'
import initialRootState from '../initialStates'
import rootReducer from '../reducers/root/root.reducer'
import logger from 'redux-logger'

export const configureAppStore = (preloadedState: AppReducerState = initialRootState) => {
  return configureStore({
    reducer: rootReducer,
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
