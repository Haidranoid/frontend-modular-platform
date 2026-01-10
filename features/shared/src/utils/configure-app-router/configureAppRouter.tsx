import type { ReactNode } from 'react'
import type { RouteObject, DataRouter } from 'react-router'
import { createMemoryRouter, createBrowserRouter, Outlet } from 'react-router'

export interface ConfigureAppRouterParams {
  routes: RouteObject[]
  mode?: 'browser' | 'memory'
  initialPath?: string
  initializer?: ReactNode
}

export const configureAppRouter = (params: ConfigureAppRouterParams): DataRouter => {
  const { routes, initialPath, initializer, mode = 'browser' } = params

  const rootRoute: RouteObject = {
    element: (
      <>
        {initializer}
        <Outlet />
      </>
    ),
    children: routes,
  }

  if (mode === 'memory') {
    return createMemoryRouter([rootRoute], {
      initialEntries: [initialPath ?? '/'],
    })
  }

  return createBrowserRouter([rootRoute])
}
