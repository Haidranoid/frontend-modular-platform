import { RouteObject } from 'react-router'
import { BasePaths } from '@webapp/shared/constants'
import { Home, AuthLayout, Login, Signup } from '#ui'

export const routes: RouteObject[] = [
  {
    path: BasePaths.AUTH_BASE,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: BasePaths.AUTH_BASE + '/',
        Component: AuthLayout,
        children: [
          {
            path: BasePaths.AUTH_BASE + '/login',
            Component: Login,
          },
          {
            path: BasePaths.AUTH_BASE + '/signup',
            Component: Signup,
          },
        ],
      },
    ],
  },
]
