import { configureStore, Reducer } from '@reduxjs/toolkit'
import { reduxLogger } from '../redux-logger'

export function configureAppStore<S>(params: {
  initialState: S
  rootReducer: Reducer<S>
}) {
  const store = configureStore({
    reducer: params.rootReducer,
    preloadedState: params.initialState,
    middleware: (gDM) => gDM().concat(reduxLogger),
    devTools: {
      name: 'Redux Devtools',
      shouldHotReload: false,
    },
  })

  return {
    ...store,
  }
}
