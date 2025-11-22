import { createHandler } from '@webapp/shared'
import { Endpoints } from '#constants'
import { DeleteUserSuccess, DeleteUserPayload } from '#types'
import { deleteUser_200_fixture } from '../fixtures'

const deleteUserHandlers = createHandler<
  DeleteUserSuccess,
  DeleteUserPayload,
  { id: string }
>({
  path: Endpoints.USER_BY_ID,
  method: 'delete',
  success: deleteUser_200_fixture,
  badRequest: () => ({}),
  serverError: () => ({}),
})

export const deleteUser_200_handler = deleteUserHandlers.success
export const deleteUser_400_handler = deleteUserHandlers.badRequest
export const deleteUser_500_handler = deleteUserHandlers.serverError
