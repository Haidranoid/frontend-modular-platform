import { faker } from '@faker-js/faker'
import { Roles } from '@webapp/shared'
import { FetchUsersSuccess } from '#types'
import type { Fixture } from './fixtures.types'

export const fetchUsersSuccessFixture: Fixture<FetchUsersSuccess> = () => {
  return {
    users: [
      {
        id: faker.number.int(),
        password: faker.internet.password(),
        username: faker.internet.username(),
        role: Roles.ADMIN,
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      },
      {
        id: faker.number.int(),
        password: faker.internet.password(),
        username: faker.internet.username(),
        role: Roles.ADMIN,
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      },
      {
        id: faker.number.int(),
        password: faker.internet.password(),
        username: faker.internet.username(),
        role: Roles.ADMIN,
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      },
      {
        id: faker.number.int(),
        password: faker.internet.password(),
        username: faker.internet.username(),
        role: Roles.ADMIN,
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      },
    ],
  }
}
