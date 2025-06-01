import { JSX } from 'react'
import { GenerateAllowedRoles } from './index.types'
import { Roles } from '@constants'
import { CustomRoute } from '@components'
import Routes from '@routes'

export const RenderRoutes: JSX.Element[] = Routes.map((route) => (
  <CustomRoute key={route.path} {...route} />
))

export const generateAllowedRoles: GenerateAllowedRoles = (allowedRoles) => {
  let set = new Set<Roles>(allowedRoles)

  // if allowedRoles is null, is an empty array or includes the role everyone
  // returns the allowedRoles accessible for everyone
  if (
    !allowedRoles ||
    allowedRoles.length === 0 ||
    allowedRoles.includes(Roles.EVERYONE)
  ) {
    set = new Set<Roles>(Object.values(Roles))
  }

  return set
}

/*
export const isUserAllowed: IsRoleAllowed = (user, allowedRoles) => {
  if (user === null) {
    return false
  }

  return allowedRoles.has(user.role)
}
*/
