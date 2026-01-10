import { Fixture } from '@webapp/shared'
import type { DeleteAccountSuccess, DeleteAccountPayload } from '#types'

export const deleteAccount_200_fixture: Fixture<
  DeleteAccountSuccess,
  DeleteAccountPayload,
  { id: string }
> = ({ params }) => {
  return {
    id: Number(params!.id),
  }
}
