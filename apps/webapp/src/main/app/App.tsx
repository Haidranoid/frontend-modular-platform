import type { FC } from 'react'
import { renderApp } from '@webapp/shared'
import { webappStore } from '../state'
import { webappRouter } from '../router'
import { webappInitializerAction } from './initializer-action'

const App: FC = () => {
  return renderApp({
    config: {
      store: webappStore,
      router: webappRouter,
      initializerAction: webappInitializerAction,
    },
    options: {
      strictMode: false,
    },
  })
}

export { App }
