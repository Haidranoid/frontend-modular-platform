import { RouteObject } from 'react-router'

export const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        lazy: async () => {
          const { Home } = await import('#ui')
          return { Component: Home }
        },
      },
      {
        path: '/',
        lazy: async () => {
          const { AuthLayout } = await import('#ui')
          return { Component: AuthLayout }
        },
        children: [
          {
            path: '/login',
            lazy: async () => {
              const { Login } = await import('#ui')
              return { Component: Login }
            },
          },
          {
            path: '/signup',
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
