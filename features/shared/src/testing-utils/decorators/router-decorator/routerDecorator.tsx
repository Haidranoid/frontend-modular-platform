import type { DecoratorFunction } from 'storybook/internal/csf'
import type { ReactRenderer } from '@storybook/react-webpack5'
import { RouterProvider } from '#providers'
import { RouteObject } from 'react-router'
import { configureAppRouter } from '#utils'

export interface WithRouterParameters {
  withRouter: {
    routes: RouteObject[]
    disable?: boolean
    initialPath?: string
    routeId?: string
  }
}

export const withRouter: DecoratorFunction<ReactRenderer> = (Story, { parameters }) => {
  if (parameters?.disableDecorators) return <Story />
  if (parameters?.withRouter?.disable) return <Story />

  const config = (parameters as WithRouterParameters).withRouter

  if (!config?.routeId) return <Story />

  const found = findRouteById(config.routes, config.routeId)
  if (!found) {
    console.warn(`Route id "${config.routeId}" not found.`)
    return <Story />
  }

  const { route, parentPath } = found

  let finalPath = route.path

  if (route.index) {
    finalPath = parentPath
  }

  if (!finalPath) {
    console.warn(`Route id "${config.routeId}" does not have a valid path.`)
    return <Story />
  }

  const isolatedRoute: RouteObject[] = [
    {
      path: finalPath,
      element: <Story />,
    },
  ]

  const router = configureAppRouter({
    routes: isolatedRoute,
    initialPath: config?.initialPath || '/',
  })

  return <RouterProvider routerConfig={{ router }} />
}

//-----------------------------------------------------------------------------
export type FoundRoute = {
  route: RouteObject
  parentPath: string | undefined
}

export const findRouteById = (
  routes: RouteObject[],
  id: string,
  parentPath?: string,
): FoundRoute | null => {
  for (const r of routes) {
    if (r.id === id) return { route: r, parentPath }

    if (r.children) {
      const res = findRouteById(r.children, id, r.path || parentPath)
      if (res) return res
    }
  }
  return null
}
