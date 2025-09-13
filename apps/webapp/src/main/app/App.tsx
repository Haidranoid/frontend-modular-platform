import { FC } from 'react'
import { AppProvider } from '@webapp/shared'

import { store } from '../state'
import { routes } from '../routes'

export const App: FC = () => {
  return <AppProvider store={store} routes={routes} />
}
