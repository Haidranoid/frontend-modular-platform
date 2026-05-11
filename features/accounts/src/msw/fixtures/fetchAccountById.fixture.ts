import { faker } from '@faker-js/faker'
import { Roles, Fixture } from '@webapp/shared'
import { FetchAccountByIdSuccess } from '#types'

export const fetchAccountById_200_fixture: Fixture<FetchAccountByIdSuccess> = () => {
  return {
    account: {
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
