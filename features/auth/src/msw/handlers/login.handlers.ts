import { createHandler, HttpMethods } from '@webapp/shared'
import { Endpoints } from '#constants'
import { LoginSuccess, LoginPayload } from '#types'
import { authMswFixtures } from '../fixtures'

const { login_200_fixture } = authMswFixtures

const loginHandlers = createHandler<LoginSuccess, LoginPayload>({
  path: Endpoints.LOGIN,
  method: HttpMethods.POST,
  success: ({ body }) => login_200_fixture({ body }),
  badRequest: () => ({}),
  serverError: () => ({}),
})

export const login_200_handler = loginHandlers.success
export const login_400_handler = loginHandlers.badRequest
export const login_500_handler = loginHandlers.serverError
