import { FC, StrictMode } from 'react'
import { ProviderComposer } from '@webapp/shared/ui'

import { router } from '#router'
import { store } from '#state'

export const App: FC = () => {
  return (
    <StrictMode>
      <ProviderComposer
        // @ts-ignore
        reduxProviderProps={{ store }}
        routerProviderProps={{ router }}
      />
    </StrictMode>
  )
}
