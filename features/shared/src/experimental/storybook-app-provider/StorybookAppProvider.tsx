import { FC, StrictMode } from 'react'
import { Store } from 'redux'
import { RouteObject } from 'react-router'
import { ReduxProvider } from '../redux-provider'
import { ThemeProvider } from '../theme-provider'
import { MemoryRouterProvider } from '../memory-router-provider'
import { StorybookContextBox, ContextBoxProps } from '#ui'

export interface StorybookAppProviderProps {
  store: Store
  routes: RouteObject[]
  initialPath?: string
  storybookContextConfig?: Partial<ContextBoxProps>
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
                title={props.storybookContextConfig?.title || 'App Context'}
                items={props.storybookContextConfig?.items || []}
                config={props.storybookContextConfig?.config}
                domElement={
                  props.storybookContextConfig?.domElement ||
                  document.getElementsByTagName('body')[0]
                }
              />
            }
          />
        </ThemeProvider>
      </ReduxProvider>
    </StrictMode>
  )
}
