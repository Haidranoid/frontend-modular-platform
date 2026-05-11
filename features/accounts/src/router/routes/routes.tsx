import type { RouteObject } from 'react-router'
import { RouteBasePaths, RouteRestrictionLevels } from '@webapp/shared'
import { MainLayout, AuthProtectedLayout } from '#ui'

/*
const authMiddleware: MiddlewareFunction  = async ({ context }) => {
  const session = useAppSelector((s) => s.auth.session)

  if (!session) {
    throw redirect("/accounts?status=401");
  }

  context.set(userContext, await getUserById(userId));
};*/

const routes: RouteObject[] = [
  {
    id: 'accountsApp',
    path: RouteBasePaths.ACCOUNTS_BASE,
    children: [
      {
        Component: MainLayout,
        children: [
          {
            id: 'accountsCreate',
            path: 'create',
            lazy: async () => {
              const { CreateAccount } = await import('#ui')
              return {
                element: (
                  <AuthProtectedLayout
                    restrictionLevel={RouteRestrictionLevels.GUEST_ONLY}
                  >
                    <CreateAccount />
                  </AuthProtectedLayout>
                ),
              }
            },
          },
          {
            id: 'accountsHome',
            index: true,
            lazy: async () => {
              const { Home } = await import('#ui')
              return {
                element: (
                  <AuthProtectedLayout
                    restrictionLevel={RouteRestrictionLevels.AUTH_REQUIRED}
                  >
                    <Home />
                  </AuthProtectedLayout>
                ),
              }
            },
          },
          {
            id: 'accountsUpdate',
            path: ':accountId/update',
            lazy: async () => {
              const { UpdateAccount } = await import('#ui')
              return {
                element: (
                  <AuthProtectedLayout
                    restrictionLevel={RouteRestrictionLevels.AUTH_REQUIRED}
                  >
                    <UpdateAccount />
                  </AuthProtectedLayout>
                ),
              }
            },
          },
          {
            id: 'accountsDelete',
            path: ':accountId/delete',
            lazy: async () => {
              const { DeleteAccount } = await import('#ui')
              return {
                element: (
                  <AuthProtectedLayout
                    restrictionLevel={RouteRestrictionLevels.AUTH_REQUIRED}
                  >
                    <DeleteAccount />
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

export { routes as accountsRoutes }
