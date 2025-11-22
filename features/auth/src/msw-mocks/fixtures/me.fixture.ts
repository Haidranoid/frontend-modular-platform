import { faker } from '@faker-js/faker'
import { Roles, Fixture } from '@webapp/shared'
import type { GetMeSuccess } from '#types'

export const getMe_200_fixture: Fixture<GetMeSuccess> = () => {
  return {
    id: faker.number.int(),
    password: faker.internet.password(),
    username: faker.internet.username(),
    role: Roles.ADMIN,
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  }
}
