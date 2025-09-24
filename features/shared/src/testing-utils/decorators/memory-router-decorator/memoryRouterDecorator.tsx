import { DecoratorFunction } from 'storybook/internal/csf'
import { ReactRenderer } from '@storybook/react-webpack5'
import { MemoryRouterProvider } from '#providers'
import { RouteObject } from 'react-router'

export interface WithMemoryRouterParameters {
  routerConfig: {
    initialPath?: string
  }
}

export const withMemoryRouter: DecoratorFunction<ReactRenderer> = (
  Story,
  { parameters },
) => {
  if (parameters?.disableGlobalDecorators) return <Story />
  if (parameters?.withMemoryRouter?.disable) return <Story />

  const routerConfig = (parameters as WithMemoryRouterParameters).routerConfig

  const routes: RouteObject[] = [{ path: '*', element: <Story /> }]

  return <MemoryRouterProvider initialPath={routerConfig.initialPath} routes={routes} />
}
