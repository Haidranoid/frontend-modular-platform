import { FC, StrictMode } from 'react'
import { Store } from 'redux'
import { RouteObject } from 'react-router'
import { ReduxProvider } from '../redux-provider'
import { ThemeProvider } from '../theme-provider'
import { RouterProvider } from '../router-provider'
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
