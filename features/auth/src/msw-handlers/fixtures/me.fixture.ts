import { faker } from '@faker-js/faker'
import { Roles } from '@webapp/shared'
import type { GetMeSuccess } from '#types'
import type { Fixture } from './fixtures.types'

export const getMeSuccessFixture: Fixture<GetMeSuccess> = () => {
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
