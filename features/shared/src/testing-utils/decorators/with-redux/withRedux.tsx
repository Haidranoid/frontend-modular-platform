import type { Decorator } from '@storybook/react'
import type { EnhancedStore } from '@reduxjs/toolkit'
import type { BaseDecoratorParameters } from '#types'
import type { ConfigureAppStoreParams } from '#utils'
import { ReduxProvider } from '#providers'

export interface WithReduxParameters
  extends ConfigureAppStoreParams<any>,
    BaseDecoratorParameters {
  store: EnhancedStore
}

export interface WithReduxDecoratorParameters {
  withRedux: Partial<WithReduxParameters>
}

export const withRedux: Decorator = (Story, { parameters }) => {
  const params = parameters as WithReduxDecoratorParameters
  const config = params.withRedux

  if (config.disabled) {
    return <Story />
  }

  if (!config.store) {
    console.warn('store parameter is required')
    return <Story />
  }

  //const store = configureAppStore({
  //  reducers: config.reducers,
  //  initialState: config.initialState,
  //})

  //if (config.initializerAction) {
  //  config.initializerAction(config.store.dispatch, config.store.getState)
  //}

  return (
    <ReduxProvider store={config.store}>
      <Story />
    </ReduxProvider>
  )
}
