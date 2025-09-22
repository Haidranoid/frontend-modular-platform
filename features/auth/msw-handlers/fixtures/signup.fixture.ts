import { faker } from '@faker-js/faker'
import { Roles } from '@webapp/shared'
import type { SignupSuccess } from '#state'
import type { Fixture } from './fixtures.types'

export const signupSuccessFixture: Fixture<SignupSuccess> = (params) => {
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
      username: requestBody.username,
      role: Roles.ADMIN,
      email,
      firstName,
      lastName,
    },
  }
}
