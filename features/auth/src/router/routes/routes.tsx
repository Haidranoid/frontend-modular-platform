import { RouteObject } from 'react-router'
import { RouteBasePaths, RouteRestrictionLevels } from '@webapp/shared'
import { MainLayout, AuthProtectedLayout } from '#ui'

const routes: RouteObject[] = [
  {
    id: 'authApp',
    path: RouteBasePaths.AUTH_BASE,
    children: [
      {
        Component: MainLayout,
        children: [
          {
            id: 'authHome',
            index: true,
            lazy: async () => {
              const { Home } = await import('#ui')
              return {
                element: (
                  <AuthProtectedLayout restrictionLevel={RouteRestrictionLevels.PUBLIC}>
                    <Home />
                  </AuthProtectedLayout>
                ),
              }
            },
          },
          {
            id: 'authLogin',
            path: 'login',
            lazy: async () => {
              const { Login } = await import('#ui')
              return {
                element: (
                  <AuthProtectedLayout
                    restrictionLevel={RouteRestrictionLevels.GUEST_ONLY}
                  >
                    <Login />
                  </AuthProtectedLayout>
                ),
              }
            },
          },
          {
            id: 'authSignup',
            path: 'signup',
            lazy: async () => {
              const { Signup } = await import('#ui')
              return {
                element: (
                  <AuthProtectedLayout
                    restrictionLevel={RouteRestrictionLevels.GUEST_ONLY}
                  >
                    <Signup />
                  </AuthProtectedLayout>
                ),
              }
            },
          },
        ],
      },
    ],
  },
]

export { routes as authRoutes }
