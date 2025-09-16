import { FC, ReactNode, StrictMode } from 'react'
import { Store } from 'redux'
import { RouteObject } from 'react-router'
import { ThemeProvider } from '@libraries/ui'
import { ReduxProvider } from '../redux-provider'
import { RouterProvider, MemoryRouterProvider } from '../router-provider'
import { configureAppRouter } from '#utils'

// ========================== app render ==============================
export interface AppProviderProps {
  store: Store
  routes: RouteObject[]
}

export const AppProvider: FC<AppProviderProps> = (props) => {
  const router = configureAppRouter({ routes: props.routes })

  return (
    <StrictMode>
      <ReduxProvider store={props.store}>
        <ThemeProvider>
          <RouterProvider routerConfig={{ router }} />
        </ThemeProvider>
      </ReduxProvider>
    </StrictMode>
  )
}

// ========================== storybook render ==============================
export interface MemoryAppProviderProps {
  children: ReactNode
  store: Store
  initialPath?: string
}

export const MemoryAppProvider: FC<MemoryAppProviderProps> = (props) => {
  return (
    <StrictMode>
      <ReduxProvider store={props.store}>
        <ThemeProvider>
        <MemoryRouterProvider initialPath={props.initialPath}>
          {props.children}
        </MemoryRouterProvider>
        </ThemeProvider>
      </ReduxProvider>
    </StrictMode>
  )
}
