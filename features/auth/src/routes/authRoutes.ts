import { RouteObject } from 'react-router'
import { RouteBasePaths, RouteRestrictionLevels } from '@webapp/shared'
import { MainLayout, AuthProtectedLayout } from '#ui'

export const authRoutes: RouteObject[] = [
  {
    id: 'authApp',
    path: RouteBasePaths.AUTH_BASE,
    children: [
      // Public routes
      {
        Component: MainLayout,
        children: [
          {
            Component: AuthProtectedLayout,
            children: [
              {
                id: 'authHome',
                index: true,
                handle: {
                  restrictionLevel: RouteRestrictionLevels.NON_AUTH_REQUIRED,
                },
                lazy: async () => {
                  const { Home } = await import('#ui')
                  return { Component: Home }
                },
              },
              {
                id: 'authLogin',
                path: 'login',
                handle: {
                  restrictionLevel: RouteRestrictionLevels.AUTH_WILL_BLOCK,
                },
                lazy: async () => {
                  const { Login } = await import('#ui')
                  return { Component: Login }
                },
              },
              {
                id: 'authSignup',
                path: 'signup',
                handle: {
                  restrictionLevel: RouteRestrictionLevels.AUTH_WILL_BLOCK,
                },
                lazy: async () => {
                  const { Signup } = await import('#ui')
                  return { Component: Signup }
                },
              },
            ],
          },
        ],
      },
      /* Protected routes
      {
        id: "authHome",
        index: true,
        lazy: async () => {
          const { Home } = await import("#ui");
          return { Component: Home };
        },
      },
      */
    ],
  },
]
