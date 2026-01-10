import { FC } from 'react'
import { renderApp } from '@webapp/shared'

import { accountsReducer } from '#state'
import { accountsRoutes } from '#routes'
import { AccountsInitializer } from '#app-initializer'

export const App: FC = () => {
  return renderApp({
    strictMode: false,
    storeConfig: {
      reducers: {
        accounts: accountsReducer,
      },
      initialState: {
        //auth: {}
      },
    },
    routerConfig: {
      routes: accountsRoutes,
      initializer: <AccountsInitializer />,
    },
  })
}
