import { FC } from 'react'
import { renderApp } from '@webapp/shared'

//const AuthFeature = React.lazy(() => import('@webapp/auth'));

import { store } from '../state'
import { routes } from '../routes'

export const App: FC = () => {
  return renderApp({ store, routes})
}
