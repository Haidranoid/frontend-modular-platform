import { createHandler } from '@webapp/shared'
import { Endpoints } from '#constants'
import { SignupPayload, SignupSuccess } from '#types'
import { signup_200_fixture } from '../fixtures'

const signupHandlers = createHandler<SignupSuccess, SignupPayload>({
  path: Endpoints.SIGNUP,
  method: 'post',
  success: ({ body }) => signup_200_fixture({ body }),
  badRequest: () => ({}),
  serverError: () => ({}),
})

export const signup_200_handler = signupHandlers.success
export const signup_400_handler = signupHandlers.badRequest
export const signup_500_handler = signupHandlers.serverError
