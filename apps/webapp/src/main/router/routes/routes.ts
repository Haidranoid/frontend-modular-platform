import { RouteObject } from 'react-router'
import { routes as authRoutes } from '@webapp/auth'
//import { routes as globalRoutes } from '@webapp/global'
//import { routes as usersRoutes } from '@webapp/users'

export const routes: RouteObject[] = [
    ...authRoutes,
    //...globalRoutes,
    //...usersRoutes
]
