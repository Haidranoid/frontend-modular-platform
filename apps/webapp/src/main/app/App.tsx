import { FC, StrictMode } from 'react'
import { ProviderComposer } from '@webapp/shared'

import { router } from '../router'
import { store } from '../state'

export const App: FC = () => {
  return (
    <StrictMode>
      <ProviderComposer storeConfig={store} routerConfig={{ router }}/>
    </StrictMode>
  )
}
