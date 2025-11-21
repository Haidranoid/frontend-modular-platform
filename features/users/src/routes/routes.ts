import { RouteObject } from 'react-router'
import { BasePaths } from '@webapp/shared'

export const routes: RouteObject[] = [
  {
    id: 'usersBase',
    path: BasePaths.USERS_BASE,
    children: [
      {
        id: 'usersHome',
        index: true,
        lazy: async () => {
          const { Home } = await import('#ui')
          return { Component: Home }
        },
      },
      {
        id: 'usersLayout',
        path: BasePaths.USERS_BASE,
        lazy: async () => {
          const { MainLayout } = await import('#ui')
          return { Component: MainLayout }
        },
        children: [
          {
            id: 'usersCreate',
            path: BasePaths.USERS_BASE + '/create',
            lazy: async () => {
              const { CreateUser } = await import('#ui')
              return { Component: CreateUser }
            },
          },
          {
            id: 'usersUpdate',
            path: BasePaths.USERS_BASE + '/:userId/update',
            lazy: async () => {
              const { UpdateUser } = await import('#ui')
              return { Component: UpdateUser }
            },
          },
          {
            id: 'usersDelete',
            path: BasePaths.USERS_BASE + '/:userId/delete',
            lazy: async () => {
              const { DeleteUser } = await import('#ui')
              return { Component: DeleteUser }
            },
          },
        ],
      },
    ],
  },
]
