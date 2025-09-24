import { FC, StrictMode } from 'react'
import { Store } from 'redux'
import { RouteObject } from 'react-router'
import { ReduxProvider } from '../redux-provider'
import { ThemeProvider } from '../theme-provider'
import { MemoryRouterProvider } from '../memory-router-provider'
import { StorybookContextBox } from '#ui'

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
          <MemoryRouterProvider
            initialPath={props.initialPath}
            routes={props.routes}
            wrapper={
              <StorybookContextBox
                title="App Context"
                items={[]}
                domElement={document.getElementsByTagName('body')[0]}
              />
            }
          />
        </ThemeProvider>
      </ReduxProvider>
    </StrictMode>
  )
}
