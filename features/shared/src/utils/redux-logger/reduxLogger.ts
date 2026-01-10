import { ThunkMiddleware } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'

export const reduxLogger: ThunkMiddleware = createLogger({
  collapsed: false,
  predicate: () => !!window['Cypress'], // only log in cypress
  stateTransformer: (state) => JSON.parse(JSON.stringify(state)),
  actionTransformer: (action) => JSON.parse(JSON.stringify(action)),
})
