import { HttpHandler } from 'msw'
import { createHandler, HttpMethods } from '@webapp/shared'
import { Endpoints } from '#constants'
import { CreateAccountPayload, CreateAccountSuccess } from '#types'
import { accountsMswFixtures } from '../fixtures'

const { createAccount_200_fixture } = accountsMswFixtures

const createAccountHandlers = createHandler<CreateAccountSuccess, CreateAccountPayload>({
  path: Endpoints.ACCOUNTS,
  method: HttpMethods.POST,
  success: ({ body }) => createAccount_200_fixture({ body }),
  badRequest: () => ({ message: 'Invalid input' }),
  serverError: () => ({ message: 'Internal server error' }),
})

export const createAccount_200_handler: HttpHandler = createAccountHandlers.success
export const createAccount_400_handler: HttpHandler = createAccountHandlers.badRequest
export const createAccount_500_handler: HttpHandler = createAccountHandlers.serverError
