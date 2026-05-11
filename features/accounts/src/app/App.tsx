import type { FC } from 'react'
import { renderApp } from '@webapp/shared'
import { accountsStore, accountsReducer, type AccountsState } from '#state'
import { accountsRouter, accountsRoutes } from '#router'
import { accountsInitializerAction } from './initializer-action'

const App: FC = () => {
  return renderApp({
    config: {
      store: accountsStore,
      router: accountsRouter,
      initializerAction: accountsInitializerAction,
    },
    options: {
      strictMode: false,
    },
  })
}

export { accountsRoutes, accountsReducer, accountsInitializerAction, type AccountsState }

export { accountsStore, accountsRouter }
export { App }
