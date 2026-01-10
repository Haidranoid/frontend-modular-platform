import { faker } from '@faker-js/faker'
import { Roles, Fixture } from '@webapp/shared'
import type { SignupPayload, SignupSuccess } from '#types'

export const signup_200_fixture: Fixture<SignupSuccess, SignupPayload> = (params) => {
  const { body } = params

  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const email = faker.internet.email({ firstName, lastName })

  return {
    accessToken: faker.internet.jwt(),
    refreshToken: faker.internet.jwt(),
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
