import { RouteObject } from 'react-router'
import { BasePaths } from '@webapp/shared'

export const routes: RouteObject[] = [
  {
    path: BasePaths.AUTH_BASE,
    children: [
      {
        index: true,
        lazy: async () => {
          const { Home } = await import('#ui')
          return { Component: Home }
        },
      },
      {
        path: BasePaths.AUTH_BASE,
        lazy: async () => {
          const { AuthLayout } = await import('#ui')
          return { Component: AuthLayout }
        },
        children: [
          {
            path: BasePaths.AUTH_BASE + '/login',
            lazy: async () => {
              const { Login } = await import('#ui')
              return { Component: Login }
            },
          },
          {
            path: BasePaths.AUTH_BASE + '/signup',
            lazy: async () => {
              const { Signup } = await import('#ui')
              return { Component: Signup }
            },
          },
        ],
      },
    ],
  },
]
