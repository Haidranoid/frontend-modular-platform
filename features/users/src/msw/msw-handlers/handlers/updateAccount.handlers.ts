import { HttpHandler } from 'msw'
import { createHandler, HttpMethods } from '@webapp/shared'
import { Endpoints } from '#constants'
import { UpdateAccountSuccess, UpdateAccountPayload } from '#types'
import { updateAccount_200_fixture } from '../fixtures'

const updateAccountHandlers = createHandler<UpdateAccountSuccess, UpdateAccountPayload>({
  path: Endpoints.ACCOUNT_BY_ID,
  method: HttpMethods.PATCH,
  success: ({ body }) => updateAccount_200_fixture({ body }),
  badRequest: () => ({ message: 'Invalid input' }),
  serverError: () => ({ message: 'Internal server error' }),
})

export const updateAccount_200_handler: HttpHandler = updateAccountHandlers.success
export const updateAccount_400_handler: HttpHandler = updateAccountHandlers.badRequest
export const updateAccount_500_handler: HttpHandler = updateAccountHandlers.serverError
