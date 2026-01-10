import { faker } from '@faker-js/faker'
import { Roles, Fixture } from '@webapp/shared'
import type { CreateAccountPayload, CreateAccountSuccess } from '#types'

export const createAccount_200_fixture: Fixture<
  CreateAccountSuccess,
  CreateAccountPayload
> = ({ body }) => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const email = faker.internet.email({ firstName, lastName })

  return {
    account: {
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
