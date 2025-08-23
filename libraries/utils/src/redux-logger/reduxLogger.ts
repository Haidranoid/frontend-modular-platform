import { createLogger } from 'redux-logger'
import { Middleware } from 'redux'

export const reduxLogger: Middleware = createLogger({
  collapsed: false,
  predicate: () => !!window['Cypress'], // only log in cypress
  stateTransformer: (state) => JSON.parse(JSON.stringify(state)),
  actionTransformer: (action) => JSON.parse(JSON.stringify(action)),
})
