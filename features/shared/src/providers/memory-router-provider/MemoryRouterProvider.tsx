import { FC, ReactNode } from 'react'
import { RouteObject, createMemoryRouter, Outlet } from 'react-router'
import { RouterProvider } from '../router-provider'

export interface MemoryRouterProviderProps {
  routes: RouteObject[]
  initialPath?: string
  wrapper?: ReactNode
}

export const MemoryRouterProvider: FC<MemoryRouterProviderProps> = ({
  routes,
  initialPath = '/',
  wrapper,
}) => {
  const rootRoute: RouteObject = {
    element: (
      <>
        {wrapper}
        <Outlet />
      </>
    ),
    children: routes,
  }

  const router = createMemoryRouter([rootRoute], {
    initialEntries: [initialPath],
  })

  return <RouterProvider routerConfig={{ router }} />
}
