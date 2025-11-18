import { faker } from '@faker-js/faker'
import { Roles } from '@webapp/shared'
import type { UpdateUserPayload, UpdateUserSuccess } from '#types'
import type { Fixture } from './fixtures.types'

export const updateUserSuccessFixture: Fixture<UpdateUserSuccess, UpdateUserPayload> = (
  params,
) => {
  const { requestBody } = params

  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const email = faker.internet.email({ firstName, lastName })

  return {
    accessToken: faker.internet.jwt(),
    refreshToken: faker.internet.jwt(),
    user: {
      id: faker.number.int(),
      password: faker.internet.password(),
      username: requestBody.user.username,
      role: Roles.ADMIN,
      email,
      firstName,
      lastName,
    },
  }
}
