import { faker } from '@faker-js/faker'
import { Roles, Fixture } from '@webapp/shared'
import type { GetMeSuccess } from '#types'

export const getMe_200_fixture: Fixture<GetMeSuccess> = () => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const email = faker.internet.email({ firstName, lastName })

  return {
    id: faker.number.int(),
    password: faker.internet.password(),
    username: faker.internet.username(),
    role: Roles.ADMIN,
    email,
    firstName,
    lastName,
  }
}
