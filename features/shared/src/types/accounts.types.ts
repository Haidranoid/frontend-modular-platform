import type { Roles } from '#constants'
import type { EntityId } from './common.types'

export interface Account extends EntityId {
  id: number
  username: string
  firstName: string
  lastName: string
  email: string
  role: Roles
}
