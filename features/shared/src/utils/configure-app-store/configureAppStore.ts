import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit'
import { reduxLogger } from './redux-logger'

export interface ConfigureAppStoreParams<R> {
  reducers: R
  initialState?: any
}

export function configureAppStore<R extends Record<string, Reducer>>({
  reducers,
  initialState,
}: ConfigureAppStoreParams<R>) {
  const rootReducer = combineReducers(reducers)

  // return configureStore<StateFromReducersMapObject<R>>({
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({ thunk: true }).concat(reduxLogger)
    },
    devTools: {
      name: 'Redux Devtools',
      shouldHotReload: false,
    },
  })
}
