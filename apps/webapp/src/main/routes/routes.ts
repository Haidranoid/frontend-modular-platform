import { RouteObject } from 'react-router'
import { routes as authRoutes } from '@webapp/auth'
import { routes as usersRoutes } from '@webapp/users'
//import { routes as globalRoutes } from '@webapp/global'

export const routes: RouteObject[] = [
  ...authRoutes,
  ...usersRoutes,
  //...globalRoutes,
]
