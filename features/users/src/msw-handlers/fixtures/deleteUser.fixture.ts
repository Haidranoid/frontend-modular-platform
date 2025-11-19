import type { DeleteUserSuccess, DeleteUserPayload } from '#types'
import type { Fixture } from './fixtures.types'

export const deleteUser_200_fixture: Fixture<DeleteUserSuccess, DeleteUserPayload> = (
  params,
) => {
  const { requestBody } = params

  return {
    id: requestBody.id,
  }
}
