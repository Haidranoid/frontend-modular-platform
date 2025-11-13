import { http, HttpResponse, RequestHandler } from 'msw'
import { Endpoints } from '#constants'
import { SignupPayload, SignupSuccess } from '#types'
import { signupSuccessFixture } from '../fixtures'

export const signup_200: RequestHandler = http.post<object, SignupPayload, SignupSuccess>(
  Endpoints.SIGNUP,
  async ({ request }) => {
    const body = await request.json()

    return HttpResponse.json(signupSuccessFixture({ requestBody: body }), { status: 200 })
  },
)

export const signup_400: RequestHandler = http.post<object, SignupPayload, object>(
  Endpoints.SIGNUP,
  async ({ request }) => {
    const body = await request.json()

    return HttpResponse.json({}, { status: 400 })
  },
)

export const signup_500: RequestHandler = http.post<object, SignupPayload, object>(
  Endpoints.SIGNUP,
  async ({ request }) => {
    const body = await request.json()

    return HttpResponse.json({}, { status: 500 })
  },
)
