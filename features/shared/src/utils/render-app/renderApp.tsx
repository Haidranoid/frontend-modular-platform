import { StrictMode, JSX } from 'react'
import { configureAppStore, ConfigureAppStoreParams } from '../configure-app-store'
import { configureAppRouter, ConfigureAppRouterParams } from '../configure-app-router'
import { ReduxProvider, ThemeProvider, RouterProvider } from '#providers'

export interface RenderAppParams {
  storeConfig: ConfigureAppStoreParams<any>
  routerConfig: ConfigureAppRouterParams
  strictMode?: boolean
  disableAuthGuard?: boolean
}

export const renderApp = ({
  storeConfig,
  routerConfig,
  strictMode = true,
}: RenderAppParams): JSX.Element => {
  const store = configureAppStore(storeConfig)
  const router = configureAppRouter(routerConfig)

  const app = (
    <>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <RouterProvider config={{ router }} />
        </ThemeProvider>
      </ReduxProvider>
    </>
  )

  return strictMode ? <StrictMode>{app}</StrictMode> : app
}
