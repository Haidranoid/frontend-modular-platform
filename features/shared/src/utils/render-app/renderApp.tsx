import { FC, StrictMode } from 'react'
import { Store } from 'redux'
import { RouteObject } from 'react-router'
import { configureAppRouter } from '#utils'
import { ReduxProvider, ThemeProvider, RouterProvider } from '#providers'

// ========================== app render ==============================
export interface RenderAppOptions {
  store: Store
  routes: RouteObject[]
  initialPath?: string
}

export const renderApp: FC<RenderAppOptions> = (opts) => {
  const router = configureAppRouter({ routes: opts.routes, initialPath: opts.initialPath })

  return (
    <StrictMode>
      <ReduxProvider store={opts.store}>
        <ThemeProvider>
          <RouterProvider routerConfig={{ router }} />
        </ThemeProvider>
      </ReduxProvider>
    </StrictMode>
  )
}
