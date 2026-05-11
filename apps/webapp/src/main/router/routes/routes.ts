import { RouteObject } from 'react-router'
import { RouteBasePaths } from '@webapp/shared'
import { authRoutes } from '@webapp/auth'
import { accountsRoutes } from '@webapp/accounts'

const routes: RouteObject[] = [
  {
    id: 'webapp',
    path: RouteBasePaths.WEBAPP_BASE,
    children: [...authRoutes, ...accountsRoutes],
  },
]

export { routes as webappRoutes }
