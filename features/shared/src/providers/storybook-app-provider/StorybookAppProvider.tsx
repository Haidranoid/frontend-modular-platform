import { FC, Fragment, StrictMode } from 'react'
import { Store } from 'redux'
import { RouteObject } from 'react-router'
import { ReduxProvider } from '../redux-provider'
import { ThemeProvider } from '../theme-provider'
import { MemoryRouterProvider } from '../memory-router-provider'

export interface StorybookAppProviderProps {
  store: Store
  routes: RouteObject[]
  initialPath?: string
}

export const StorybookAppProvider: FC<StorybookAppProviderProps> = (props) => {
  return (
    <StrictMode>
      <ReduxProvider store={props.store}>
        <ThemeProvider>
          <MemoryRouterProvider initialPath={props.initialPath} routes={props.routes} />
        </ThemeProvider>
      </ReduxProvider>
    </StrictMode>
  )
}
