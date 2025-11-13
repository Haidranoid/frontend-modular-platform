import { RouteObject } from 'react-router'
import { BasePaths } from '@webapp/shared'

export const routes: RouteObject[] = [
  {
    path: BasePaths.USERS_BASE + '/',
    children: [
      {
        index: true,
        lazy: async () => {
          const { Home } = await import('#ui')
          return { Component: Home }
        },
      },
    ],
  },
]
