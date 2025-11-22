import { createHandler } from '@webapp/shared'
import { Endpoints } from '#constants'
import { CreateUserPayload, CreateUserSuccess } from '#types'
import { createUser_200_fixture } from '../fixtures'

const createUserHandlers = createHandler<CreateUserSuccess, CreateUserPayload>({
  path: Endpoints.USERS,
  method: 'post',
  success: ({ body }) => createUser_200_fixture({ body }),
  badRequest: () => ({ message: 'Invalid input' }),
  serverError: () => ({ message: 'Internal server error' }),
})

export const createUser_200_handler = createUserHandlers.success
export const createUser_400_handler = createUserHandlers.badRequest
export const createUser_500_handler = createUserHandlers.serverError
