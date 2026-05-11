import RouteRestrictions from '@routes/constants/RouteRestrictions'
import { withAuthGateDI } from '@experimental/hoc/withAuthGateDI'
import { withAuthGateRBAC } from '@experimental/hoc/withAuthGateRBAC'
import { Paths } from '@routes'

const withRestriction = (
  component: React.ComponentType<any>,
  restriction: RouteRestrictions,
) => {
  switch (restriction) {
    case RouteRestrictions.AUTH_REQUIRED:
      return withAuthGateDI(component)
    case RouteRestrictions.AUTH_WILL_BLOCK:
      return withAuthGateDI(component, {
        authRequired: false,
        redirectTo: Paths.HOME,
      })
    case RouteRestrictions.NON_AUTH_REQUIRED:
      return withAuthGateDI(component, { authRequired: false })
    default:
      return component
  }
}

const withRestrictionRBAC = (
  component: React.ComponentType<any>,
  restriction: RouteRestrictions,
  allowedRoles?: string[],
) => {
  switch (restriction) {
    case RouteRestrictions.AUTH_REQUIRED:
      return withAuthGateRBAC(component)
    case RouteRestrictions.AUTH_WILL_BLOCK:
      return withAuthGateRBAC(component, {
        authRequired: false,
        redirectTo: Paths.HOME,
      })
    case RouteRestrictions.NON_AUTH_REQUIRED:
      return withAuthGateRBAC(component, { authRequired: false })
    case RouteRestrictions.AUTH_AND_ROLE_REQUIRED:
      return withAuthGateRBAC(component, { allowedRoles })
    default:
      return component
  }
}
