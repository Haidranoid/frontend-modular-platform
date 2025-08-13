import { createLogger } from 'redux-logger'
import { Middleware } from 'redux'

const reduxLogger = createLogger({
  collapsed: false,
  predicate: () => !!window['Cypress'], // only log in cypress
  stateTransformer: (state) => JSON.parse(JSON.stringify(state)),
  actionTransformer: (action) => JSON.parse(JSON.stringify(action)),
})

export default reduxLogger as Middleware
