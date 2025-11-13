import type { DecoratorFunction } from 'storybook/internal/csf'
import type { ReactRenderer } from '@storybook/react-webpack5'
import { RouterProvider } from '#providers'
import { RouteObject } from 'react-router'
import { configureAppRouter } from '#utils'

export interface WithMemoryRouterParameters {
  withMemoryRouter?: {
    disable?: boolean
    initialPath?: string
  }
}

export const withMemoryRouter: DecoratorFunction<ReactRenderer> = (
  Story,
  { parameters },
) => {
  if (parameters?.disableGlobalDecorators) return <Story />
  if (parameters?.withMemoryRouter?.disable) return <Story />

  const routerConfig = (parameters as WithMemoryRouterParameters).withMemoryRouter

  const routes: RouteObject[] = [{ path: '*', element: <Story /> }]

  const router = configureAppRouter({
    routes: routes,
    initialPath: routerConfig?.initialPath || '/',
  })

  return <RouterProvider routerConfig={{ router }} />
}
