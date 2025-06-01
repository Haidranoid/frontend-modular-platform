import { Roles } from '@constants'
//import { User } from '@state/auth/interfaces/authentication.types'

export type GenerateAllowedRoles = (allowedRoles: Roles[] | undefined) => Set<Roles>

//export type IsRoleAllowed = (user: User | null, allowedRoles: Set<Roles>) => boolean
