import { createHandler } from '@webapp/shared'
import { Endpoints } from '#constants'
import { UpdateUserSuccess, UpdateUserPayload } from '#types'
import { updateUser_200_fixture } from '../fixtures'

const updateUserHandlers = createHandler<UpdateUserSuccess, UpdateUserPayload>({
  path: Endpoints.USER_BY_ID,
  method: 'patch',
  success: ({ body }) => updateUser_200_fixture({ body }),
  badRequest: () => ({ message: 'Invalid input' }),
  serverError: () => ({ message: 'Internal server error' }),
})

export const updateUser_200_handler = updateUserHandlers.success
export const updateUser_400_handler = updateUserHandlers.badRequest
export const updateUser_500_handler = updateUserHandlers.serverError
