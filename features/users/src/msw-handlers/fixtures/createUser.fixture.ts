import { faker } from '@faker-js/faker'
import { Roles } from '@webapp/shared'
import type { CreateUserPayload, CreateUserSuccess } from '#types'
import type { Fixture } from './fixtures.types'

export const createUser_200_fixture: Fixture<CreateUserSuccess, CreateUserPayload> = (
  params,
) => {
  const { requestBody } = params

  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const email = faker.internet.email({ firstName, lastName })

  return {
    user: {
      id: faker.number.int(),
      password: faker.internet.password(),
      username: requestBody.username,
      role: Roles.ADMIN,
      email,
      firstName,
      lastName,
    },
  }
}
