import type { FC } from 'react'
import { renderApp } from '@webapp/shared'
import { authReducer } from '@webapp/auth'
import { accountsReducer } from '@webapp/users'

import { appRoutes } from '../routes'
import { AppInitializer } from '../app-initializer'

export const App: FC = () => {
  return renderApp({
    strictMode: false,
    storeConfig: {
      reducers: {
        auth: authReducer,
        accounts: accountsReducer,
      },
    },
    routerConfig: {
      routes: appRoutes,
      initializer: <AppInitializer />,
    },
  })
}
