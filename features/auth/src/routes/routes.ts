import { RouteObject } from 'react-router'
import { BasePaths } from '@webapp/shared'

export const routes: RouteObject[] = [
  {
    id: 'authBase',
    path: BasePaths.AUTH_BASE,
    children: [
      {
        id: 'authHome',
        index: true,
        lazy: async () => {
          const { Home } = await import('#ui')
          return { Component: Home }
        },
      },
      {
        id: 'authLayout',
        path: BasePaths.AUTH_BASE,
        lazy: async () => {
          const { AuthLayout } = await import('#ui')
          return { Component: AuthLayout }
        },
        children: [
          {
            id: 'authLogin',
            path: BasePaths.AUTH_BASE + '/login',
            lazy: async () => {
              const { Login } = await import('#ui')
              return { Component: Login }
            },
          },
          {
            id: 'authSignup',
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
