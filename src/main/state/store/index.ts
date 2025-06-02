import { configureStore, Tuple } from '@reduxjs/toolkit'
import { AppReducerState } from '../reducers/interfaces/app.reducer.types'
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

const store = configureAppStore()

export default store
