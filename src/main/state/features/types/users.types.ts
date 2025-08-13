import { Roles } from '@constants'
import { EntityId } from '@features/helpers/slice-tools/createCrudOnFulfilledMap'

export interface User extends EntityId {
  id: number
  email: string
  password: string
  firstName: string
  lastName: string
  role: Roles
}
