import { RouteObject } from 'react-router'
import { RouteBasePaths } from '@webapp/shared'
import { authRoutes } from '@webapp/auth'
import { accountsRoutes } from '@webapp/users'

export const appRoutes: RouteObject[] = [
  {
    id: 'webapp',
    path: RouteBasePaths.WEBAPP_BASE,
    children: [...authRoutes, ...accountsRoutes],
  },
]
