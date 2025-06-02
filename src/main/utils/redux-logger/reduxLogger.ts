import { createLogger } from 'redux-logger'
import { Middleware } from 'redux'
import { AppReducerState } from '../../state/reducers/interfaces/app.reducer.types'

const reduxLogger = createLogger({
  collapsed: false,
  predicate: () => !!window['Cypress'], // only log in cypress
  stateTransformer: (state) => JSON.parse(JSON.stringify(state)),
  actionTransformer: (action) => JSON.parse(JSON.stringify(action)),
})

export default reduxLogger as Middleware<AppReducerState>
