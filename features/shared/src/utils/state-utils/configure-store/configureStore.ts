import { configureStore, EnhancedStore, Reducer } from '@reduxjs/toolkit'
import { reduxLogger } from '@libraries/utils'

interface ConfigureStoreParams<S, R extends Reducer<S>> {
  initialState: S
  reducer: R
}

export function configureAppStore<S, R extends Reducer<S>>(
  params: ConfigureStoreParams<S, R>,
): EnhancedStore<S> {
  return configureStore({
    reducer: params.reducer,
    preloadedState: params.initialState,
    middleware: (gDM) => gDM().concat(reduxLogger),
    devTools: {
      name: 'Redux Devtools',
      shouldHotReload: false,
    },
  })
}
