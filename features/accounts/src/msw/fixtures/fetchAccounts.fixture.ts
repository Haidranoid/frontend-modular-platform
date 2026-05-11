import { faker } from '@faker-js/faker'
import { Roles, Fixture } from '@webapp/shared'
import { FetchAccountsSuccess } from '#types'

export const fetchAccounts_200_fixture: Fixture<FetchAccountsSuccess> = () => {
  return {
    accounts: [
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
