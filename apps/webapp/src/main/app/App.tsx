import { FC } from 'react'
import { RenderApp } from '@webapp/shared'

import { router } from '../router'
import { store } from '../state'

export const App: FC = () => {
  return RenderApp({ storeConfig: store, routerConfig: { router } })
}
