import { FC } from 'react'
import { renderApp } from '@webapp/shared'

import { store } from '#state'
import { router } from '#router'

export const App: FC = () => {
  return renderApp({ storeConfig: store, routerConfig: { router } })
}
