import type { Roles } from '#constants'
import type { EntityId } from './common.types'

export interface User extends EntityId {
  id: number
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  role: Roles
}
