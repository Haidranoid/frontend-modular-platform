import type { RouteObject } from 'react-router'
import { RouteBasePaths, RouteRestrictionLevels } from '@webapp/shared'
import { MainLayout, AuthProtectedLayout } from '#ui'

export const accountsRoutes: RouteObject[] = [
  {
    id: 'accountsApp',
    path: RouteBasePaths.ACCOUNTS_BASE,
    children: [
      /* Public routes
      {
        Component: PublicLayout,
        children: [
          {
            Component: ProtectedLayout,
            children: [],
          },
        ],
      },
      */
      // Protected routes
      {
        Component: MainLayout,
        children: [
          {
            Component: AuthProtectedLayout,
            children: [
              {
                id: 'accountsCreate',
                path: 'create',
                handle: {
                  restrictionLevel: RouteRestrictionLevels.AUTH_WILL_BLOCK,
                },
                lazy: async () => {
                  const { CreateAccount } = await import('#ui')
                  return { Component: CreateAccount }
                },
              },
              {
                id: 'accountsHome',
                index: true,
                handle: {
                  restrictionLevel: RouteRestrictionLevels.AUTH_REQUIRED,
                },
                lazy: async () => {
                  const { Home } = await import('#ui')
                  return { Component: Home }
                },
              },
              {
                id: 'accountsUpdate',
                path: ':accountId/update',
                handle: {
                  restrictionLevel: RouteRestrictionLevels.AUTH_REQUIRED,
                },
                lazy: async () => {
                  const { UpdateAccount } = await import('#ui')
                  return { Component: UpdateAccount }
                },
              },
              {
                id: 'accountsDelete',
                path: ':accountId/delete',
                handle: {
                  restrictionLevel: RouteRestrictionLevels.AUTH_REQUIRED,
                },
                lazy: async () => {
                  const { DeleteAccount } = await import('#ui')
                  return { Component: DeleteAccount }
                },
              },
            ],
          },
        ],
      },
    ],
  },
]
