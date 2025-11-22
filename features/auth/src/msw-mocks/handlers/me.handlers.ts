import { createHandler } from '@webapp/shared'
import { Endpoints } from '#constants'
import { GetMeSuccess } from '#types'
import { getMe_200_fixture } from '../fixtures'

const meHandlers = createHandler<GetMeSuccess>({
  path: Endpoints.SIGNUP,
  method: 'get',
  success: getMe_200_fixture,
  badRequest: () => ({}),
  serverError: () => ({}),
})

export const me_200_handler = meHandlers.success
export const me_400_handler = meHandlers.badRequest
export const me_500_handler = meHandlers.serverError
