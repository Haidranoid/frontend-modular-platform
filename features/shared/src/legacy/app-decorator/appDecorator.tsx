export const appDecorator = 'appDecorator'
/*
import { Reducer } from '@reduxjs/toolkit'
import { DecoratorFunction } from 'storybook/internal/csf'
import { ReactRenderer } from '@storybook/react-webpack5'
import { MemoryAppProvider } from '#providers'
import { configureAppStore } from '#utils'

interface StoreConfig<S, R extends Reducer<S>> {
  rootReducer: R
  initialState?: S
}

export interface WithAppProps {
  storeConfig: StoreConfig<any, any>
  routerConfig: {
    initialPath?: string
  }
}

export const withApp: DecoratorFunction<ReactRenderer, WithAppProps> = (
  Story,
  { args, parameters },
) => {
  const store = configureAppStore({
    initialState: parameters.storeConfig.initialState,
    rootReducer: parameters.storeConfig.rootReducer,
  })

  return (
    <MemoryAppProvider store={store} initialPath={args.routerConfig?.initialPath}>
      <Story />
    </MemoryAppProvider>
  )
}

 */
