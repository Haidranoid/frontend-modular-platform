import { MemoryRouter, RouteObject, useRoutes } from 'react-router'
import { DecoratorFunction } from 'storybook/internal/csf'
import { ReactRenderer } from '@storybook/react-webpack5'

export interface WithRouterParameters {
  routerConfig: {
    routes: RouteObject[]
    initialPath?: string
  }
}

function RoutesRenderer({ routes }: { routes: RouteObject[] }) {
  return useRoutes(routes)
}

export const withRouter: DecoratorFunction<ReactRenderer> = (Story, { parameters }) => {
  if (parameters?.disableGlobalDecorators) return <Story />
  if (parameters?.withRouter?.disable) return <Story />

  const routerConfig = (parameters as WithRouterParameters).routerConfig

  return (
    <MemoryRouter initialEntries={[routerConfig.initialPath || '/']}>
      <RoutesRenderer
        routes={[/*...routerConfig.routes,*/ { path: '*', element: <Story /> }]}
      />
    </MemoryRouter>
  )
}
