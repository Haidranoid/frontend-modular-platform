import { faker } from '@faker-js/faker'
import { Roles, Fixture } from '@webapp/shared'
import type { UpdateUserPayload, UpdateUserSuccess } from '#types'

export const updateUser_200_fixture: Fixture<UpdateUserSuccess, UpdateUserPayload> = (
  { body },
) => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const email = faker.internet.email({ firstName, lastName })

  return {
    user: {
      id: faker.number.int(),
      password: faker.internet.password(),
      username: body!.user.username,
      role: Roles.ADMIN,
      email,
      firstName,
      lastName,
    },
  }
}
