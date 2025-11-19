import { faker } from '@faker-js/faker'
import { Roles } from '@webapp/shared'
import { FetchUserByIdSuccess } from '#types'
import type { Fixture } from './fixtures.types'

export const fetchUserById_200_fixture: Fixture<FetchUserByIdSuccess> = () => {
  return {
    user: {
      id: faker.number.int(),
      password: faker.internet.password(),
      username: faker.internet.username(),
      role: Roles.ADMIN,
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    },
  }
}
