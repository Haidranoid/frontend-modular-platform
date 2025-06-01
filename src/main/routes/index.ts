import { lazy } from 'react'
import RouteRestrictions from './constants/RouteRestrictions'
import { RouteProps } from './index.types'

const LoginLazy = lazy(() => import('@containers/authentication/login/Login'))

const Routes: Array<RouteProps> = [
  {
    exact: true,
    path: Paths.LOGIN,
    restrictionType: RouteRestrictions.AUTH_NON_REQUIRED,
    container: LoginLazy,
  },
]

export default Routes
