import { FC } from 'react'
import { RenderApp } from '@webapp/shared'

import { store } from '#state'
import { router } from '#router'

export const App: FC = () => {
  return RenderApp({ storeConfig: store, routerConfig: { router } })
}
