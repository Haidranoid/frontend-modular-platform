import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { reduxLogger } from '../redux-logger'

export interface ConfigureAppStoreParams<S, R extends EnhancedStore<S>> {
  initialState: S
  rootReducer: R
}

export type ConfigureAppStore<S,R> = (params: ConfigureAppStoreParams<S, R>) => EnhancedStore<S>

export const configureAppStore: ConfigureAppStore = (params) =>
{
  return configureStore({
    reducer: params.rootReducer,
    preloadedState: params.initialState,
    middleware: (gDM) => gDM().concat(reduxLogger),
    devTools: {
      name: 'Redux Devtools',
      shouldHotReload: false,
    },
  })
}
