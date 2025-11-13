import { FC, StrictMode } from 'react'
import { Store } from 'redux'
import { DOMRouterOpts, RouteObject } from 'react-router'
import { configureAppRouter } from '#utils'
import { ReduxProvider, ThemeProvider, RouterProvider } from '#providers'

// ========================== app render ==============================
export interface RenderAppParams {
  store: Store
  routes: RouteObject[]
  initialPath?: string
  DOMRouterOpts?: DOMRouterOpts
}

export const renderApp: FC<RenderAppParams> = (params) => {
  const router = configureAppRouter({
    routes: params.routes,
    initialPath: params.initialPath,
    opts: params.DOMRouterOpts,
  })

  return (
    <StrictMode>
      <ReduxProvider store={params.store}>
        <ThemeProvider>
          <RouterProvider routerConfig={{ router }} />
        </ThemeProvider>
      </ReduxProvider>
    </StrictMode>
  )
}
