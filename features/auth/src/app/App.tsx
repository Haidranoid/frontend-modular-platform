import { FC } from 'react'
import { renderApp } from "@webapp/shared";

import { store } from '#state'
import { routes } from "#routes";

export const App: FC = () => {
  return renderApp({ store, routes, initialPath: '/auth/'})
}
