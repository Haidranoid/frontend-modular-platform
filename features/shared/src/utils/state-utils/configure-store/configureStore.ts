import { configureStore, Reducer } from '@reduxjs/toolkit'
import { reduxLogger } from '@libraries/utils'

export interface ConfigureAppStoreParams<S, R extends Reducer<S>> {
  initialState: S
  rootReducer: R
}

export function configureAppStore<S, R extends Reducer<S>>(
  params: ConfigureAppStoreParams<S, R>,
) {
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
