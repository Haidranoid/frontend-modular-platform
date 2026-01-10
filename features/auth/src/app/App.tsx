import { FC } from 'react'
import { renderApp } from '@webapp/shared'

import { authReducer } from '#state'
import { authRoutes } from '#routes'
import { AuthInitializer } from '#app-initializer'

export const App: FC = () => {
  return renderApp({
    strictMode: false,
    storeConfig: {
      reducers: {
        auth: authReducer,
      },
      initialState: {
        //auth: {}
      },
    },
    routerConfig: {
      routes: authRoutes,
      initializer: <AuthInitializer />,
    },
  })
}
