import type { ReactNode } from 'react'
import type { Decorator } from '@storybook/react'
import { RouteObject, Outlet } from 'react-router'
import type { BaseDecoratorParameters } from '#types'
import { RouterProvider } from '#providers'
import { configureAppRouter, ConfigureAppRouterParams } from '#utils'
import { RouterSearchBar } from '#ui'

export interface WithRouterParameters
  extends ConfigureAppRouterParams,
    BaseDecoratorParameters {
  routePath: string
  initialPath: string
  layoutSlots: {
    beforeOutlet?: ReactNode
  }
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

  if (!config.routePath || !config.initialPath) {
    console.warn('routePath and initialPath parameters are required')
    return <Story />
  }

  const isolatedRoute: RouteObject = {
    element: (
      <>
        {config.layoutSlots?.beforeOutlet ?? <RouterSearchBar />}
        <Outlet />
      </>
    ),
    children: [
      {
        path: config.routePath,
        element: <Story />,
      },
      {
        path: '*',
        element: <></>,
      },
    ],
  }

  const router = configureAppRouter({
    ...config,
    mode: 'memory',
    initialPath: config.initialPath,
    routes: [isolatedRoute],
  })

  return <RouterProvider config={{ router }} />
}
