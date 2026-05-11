import type { FC } from 'react'
import { renderApp } from '@webapp/shared'
import { authStore, authReducer, type AuthState } from '#state'
import { authRouter, authRoutes } from '#router'
import { authInitializerAction } from './initializer-action'

const App: FC = () => {
  return renderApp({
    config: {
      store: authStore,
      router: authRouter,
      initializerAction: authInitializerAction,
    },
    options: {
      strictMode: false,
    },
  })
}

export { authRoutes, authReducer, authInitializerAction, type AuthState }

export { authStore, authRouter }
export { App }
