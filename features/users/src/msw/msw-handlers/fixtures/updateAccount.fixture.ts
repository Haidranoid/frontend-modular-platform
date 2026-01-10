import { faker } from '@faker-js/faker'
import { Roles, Fixture } from '@webapp/shared'
import type { UpdateAccountPayload, UpdateAccountSuccess } from '#types'

export const updateAccount_200_fixture: Fixture<
  UpdateAccountSuccess,
  UpdateAccountPayload
> = ({ body }) => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const email = faker.internet.email({ firstName, lastName })

  return {
    account: {
      id: faker.number.int(),
      password: faker.internet.password(),
      username: body!.account.username,
      role: Roles.ADMIN,
      email,
      firstName,
      lastName,
    },
  }
}
