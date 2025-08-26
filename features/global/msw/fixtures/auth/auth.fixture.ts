import { User } from '@interfaces/users/users.types'
import { Roles } from '@constants'

export const adminUserFixture: User = {
  id: 1,
  email: 'admin@hotmail.com',
  password: '',
  firstName: 'Nelly',
  lastName: 'Santollo',
  role: Roles.ADMIN,
}