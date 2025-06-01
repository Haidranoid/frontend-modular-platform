import { applyMiddleware, legacy_createStore as createStore, Middleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { createLogger } from 'redux-logger'

import { AppReducerState } from '../reducers/interfaces/app.reducer.types'
import rootReducer, { initialRootState } from '../reducers/root/root.reducer'
import { GlobalActionTypes } from '@actions'

const logger = createLogger({
  collapsed: false,
  predicate: (_getState, _action) => !!window['Cypress'], // only log in cypress
  stateTransformer: (state) => JSON.parse(JSON.stringify(state)),
  actionTransformer: (action) => JSON.parse(JSON.stringify(action)),
})

const _typedLogger = logger as Middleware<AppReducerState>

const configureAppStore = (preloadedState: AppReducerState = initialRootState) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware()),
    //composeWithDevTools(applyMiddleware(thunk, typedLogger)),
    //composeWithDevTools(applyMiddleware(thunk.withExtraArgument(httpClient))),
  )
}

const index = configureAppStore()
const resetState = () => index.dispatch({ type: GlobalActionTypes.RESET_APP })

export { initialRootState, configureAppStore, resetState }
export default index
