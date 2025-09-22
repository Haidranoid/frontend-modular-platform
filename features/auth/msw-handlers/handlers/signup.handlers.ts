import { http, HttpResponse, RequestHandler } from 'msw'
import { Endpoints } from '#constants'
import { SignupSuccess } from '#state'
import { signupSuccessFixture } from '../fixtures'

const signup_200: RequestHandler = http.post(Endpoints.SIGNUP, () => {
  return HttpResponse.json<SignupSuccess>(signupSuccessFixture(), { status: 200 })
})

export const signupHandlers = [signup_200]
