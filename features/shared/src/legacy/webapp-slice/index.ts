import { createAction, createReducer, Reducer } from '@reduxjs/toolkit'

export interface WebAppState {
  initialized: boolean
}

export const initialWebAppState: WebAppState = {
  initialized: false,
}

const actionInitialized = createAction('WEBAPP_INITIALIZED', (action) => action.payload)

const reducer = createReducer(initialWebAppState, (builder) => {
  builder.addCase('WEBAPP_INITIALIZED', (state) => ({ ...state, initialized: true }))
})

export const webAppReducer: Reducer<WebAppState> = (
  state = initialWebAppState,
  action: any,
) => {
  switch (action.type) {
    case 'WEBAPP_INITIALIZED':
      return { initialized: true }
    default:
      return state
  }
}
