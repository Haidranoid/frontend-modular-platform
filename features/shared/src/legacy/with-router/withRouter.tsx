import type { Decorator } from '@storybook/react'
import type { BaseDecoratorParameters, RouteObjectEnhanced } from '#types'
import { RouterProvider } from '#providers'
import { configureAppRouter, ConfigureAppRouterParams } from '#utils'

export interface WithRouterParameters
  extends ConfigureAppRouterParams,
    BaseDecoratorParameters {
  routeId: string
}

export interface WithRouterDecoratorParameters {
  withRouter: Partial<WithRouterParameters>
}

export const withRouter: Decorator = (Story, { parameters }) => {
  const params = parameters as WithRouterDecoratorParameters
  const config = params.withRouter

  if (config.disabled) {
    return <Story />
  }

  if (!config.routes || !config?.routeId) {
    console.warn(`routes and routeId parameters are required`)
    return <Story />
  }

  const found = findByRouteId(config.routes, config.routeId)

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

  const isolatedRoute: RouteObjectEnhanced[] = [
    {
      ...route,
      path: finalPath,
      element: <Story />,
    },
  ]

  const router = configureAppRouter({
    ...config,
    mode: 'memory',
    initialPath: finalPath,
    routes: isolatedRoute,
  })

  return <RouterProvider config={{ router }} />
}

//-----------------------------------------------------------------------------
export type FoundRoute = {
  route: RouteObjectEnhanced
  parentPath: string | undefined
}

export const findByRouteId = (
  routes: RouteObjectEnhanced[],
  routeId: string,
  parentPath?: string,
): FoundRoute | null => {
  for (const route of routes) {
    if (route.id === routeId) {
      return { route, parentPath }
    }

    if (route.children) {
      const res = findByRouteId(route.children, routeId, route.path || parentPath)
      if (res) return res
    }
  }
  return null
}
