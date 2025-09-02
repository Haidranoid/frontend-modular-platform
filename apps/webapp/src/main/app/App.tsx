import { FC } from 'react'
import { renderApp, Button } from '@webapp/shared'

import { router } from '../router'
import { store } from '../state'

export const App: FC = () => {
  return renderApp({ storeConfig: store, routerConfig: { router } })
}
