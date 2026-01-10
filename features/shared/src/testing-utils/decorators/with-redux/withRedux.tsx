import type { Decorator } from '@storybook/react'
import type { BaseDecoratorParameters } from '#types'
import { ReduxProvider } from '#providers'
import { configureAppStore, ConfigureAppStoreParams } from '#utils'

export interface WithReduxParameters
  extends ConfigureAppStoreParams<any>,
    BaseDecoratorParameters {}

export interface WithReduxDecoratorParameters {
  withRedux: Partial<WithReduxParameters>
}

export const withRedux: Decorator = (Story, { parameters }) => {
  const params = parameters as WithReduxDecoratorParameters
  const config = params.withRedux

  if (config.disabled) {
    return <Story />
  }

  if (!config.reducers) {
    console.warn(`reducers parameter is required`)
    return <Story />
  }

  const store = configureAppStore({
    reducers: config.reducers,
    initialState: config.initialState,
  })

  return (
    <ReduxProvider store={store}>
      <Story />
    </ReduxProvider>
  )
}

/*
export function createDummyStore(initialState = {}) {
  return configureAppStore({
    rootReducer: (state = initialState, _action) => state,
    initialState: initialState,
  })
}
*/
