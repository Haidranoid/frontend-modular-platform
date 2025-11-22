import { createHandler } from '@webapp/shared'
import { Endpoints } from '#constants'
import { LoginSuccess, LoginPayload } from '#types'
import { login_200_fixture } from '../fixtures'

const loginHandlers = createHandler<LoginSuccess, LoginPayload>({
  path: Endpoints.LOGIN,
  method: 'post',
  success: ({ body }) => login_200_fixture({ body }),
  badRequest: () => ({}),
  serverError: () => ({}),
})

export const login_200_handler = loginHandlers.success
export const login_400_handler = loginHandlers.badRequest
export const login_500_handler = loginHandlers.serverError
