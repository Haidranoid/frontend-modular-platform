import { faker } from '@faker-js/faker'
import { Roles, Fixture } from '@webapp/shared'
import type { CreateUserPayload, CreateUserSuccess } from '#types'

export const createUser_200_fixture: Fixture<CreateUserSuccess, CreateUserPayload> = ({
  body,
}) => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const email = faker.internet.email({ firstName, lastName })

  return {
    user: {
      id: faker.number.int(),
      password: faker.internet.password(),
      username: body!.username,
      role: Roles.ADMIN,
      email,
      firstName,
      lastName,
    },
  }
}
