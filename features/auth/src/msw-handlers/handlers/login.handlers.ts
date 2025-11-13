import { http, HttpResponse, RequestHandler } from 'msw'
import { Endpoints } from '#constants'
import { LoginSuccess, LoginPayload } from '#types'
import { loginSuccessFixture } from '../fixtures'

export const login_200: RequestHandler = http.post<object, LoginPayload, LoginSuccess>(
  Endpoints.LOGIN,
  async ({ request }) => {
    const body = await request.json()

    return HttpResponse.json(loginSuccessFixture({ requestBody: body }), { status: 200 })
  },
)

export const login_400: RequestHandler = http.post<object, LoginPayload, object>(
  Endpoints.LOGIN,
  async ({ request }) => {
    const body = await request.json()

    return HttpResponse.json({}, { status: 400 })
  },
)

export const login_500: RequestHandler = http.post<object, LoginPayload, object>(
  Endpoints.LOGIN,
  async ({ request }) => {
    const body = await request.json()

    return HttpResponse.json({}, { status: 500 })
  },
)
