import { FC } from 'react'
import { RouteObject, createMemoryRouter } from 'react-router'
import { RouterProvider } from '../router-provider'

export interface MemoryRouterProviderProps {
  routes: RouteObject[]
  initialPath?: string
}

export const MemoryRouterProvider: FC<MemoryRouterProviderProps> = (props) => {
  const router = createMemoryRouter(props.routes, {
    initialEntries: [props.initialPath || '/'],
  })

  return <RouterProvider routerConfig={{ router }} />
}
