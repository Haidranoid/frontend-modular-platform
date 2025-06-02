import { GenerateAllowedRoles, IsRoleAllowed } from './authUtils.types'
import { Roles } from '@constants'

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

export const isUserAllowed: IsRoleAllowed = (user, allowedRoles) => {
  if (user === null) {
    return false
  }

  // @ts-ignore
  return allowedRoles.has(user.role)
}
