import { FC } from 'react'
import { StorybookAppProvider } from '@webapp/shared'

import { store } from '#state'
import { routes } from '#routes'

export const StorybookApp: FC = () => {
  return <StorybookAppProvider store={store} routes={routes} initialPath={'/auth/'} />
}
