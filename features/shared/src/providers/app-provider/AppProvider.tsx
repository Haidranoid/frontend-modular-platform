import { FC, StrictMode } from 'react'
import { Store } from 'redux'
import { RouteObject } from 'react-router'
import { ThemeProvider } from '@libraries/ui'
import { ReduxProvider } from '../redux-provider'
import { RouterProvider } from '../router-provider'

export interface AppProviderOptions {
  store: Store
  routes: RouteObject[]
}

export const AppProvider: FC<AppProviderOptions> = (options) => {
  return (
    <StrictMode>
      <ReduxProvider store={options.store}>
        <ThemeProvider>
          <RouterProvider routes={options.routes} />
        </ThemeProvider>
      </ReduxProvider>
    </StrictMode>
  )
}
