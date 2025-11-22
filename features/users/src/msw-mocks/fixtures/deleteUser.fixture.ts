import { Fixture } from '@webapp/shared'
import type { DeleteUserSuccess, DeleteUserPayload } from '#types'

export const deleteUser_200_fixture: Fixture<
  DeleteUserSuccess,
  DeleteUserPayload,
  { id: string }
> = ({ params }) => {
  return {
    id: Number(params!.id),
  }
}
