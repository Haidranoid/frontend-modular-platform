import { HttpHandler } from 'msw'
import { createHandler, HttpMethods } from '@webapp/shared'
import { Endpoints } from '#constants'
import { DeleteAccountSuccess, DeleteAccountPayload } from '#types'
import { deleteAccount_200_fixture } from '../fixtures'

const deleteAccountHandlers = createHandler<
  DeleteAccountSuccess,
  DeleteAccountPayload,
  { id: string }
>({
  path: Endpoints.ACCOUNT_BY_ID,
  method: HttpMethods.DELETE,
  success: deleteAccount_200_fixture,
  badRequest: () => ({}),
  serverError: () => ({}),
})

export const deleteAccount_200_handler: HttpHandler = deleteAccountHandlers.success
export const deleteAccount_400_handler: HttpHandler = deleteAccountHandlers.badRequest
export const deleteAccount_500_handler: HttpHandler = deleteAccountHandlers.serverError
