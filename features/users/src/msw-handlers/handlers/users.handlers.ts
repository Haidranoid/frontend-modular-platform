import { http, HttpResponse, RequestHandler } from 'msw'
import { Endpoints } from '#constants'
import { CreateUserSuccess, CreateUserPayload } from '#types'
import { userCratedSuccessFixture } from '../fixtures'

export const createUser_200: RequestHandler = http.post<object, CreateUserPayload, CreateUserSuccess>(
  Endpoints.USERS,
  async ({ request }) => {
    const body = await request.json()

    return HttpResponse.json(userCratedSuccessFixture({ requestBody: body }), { status: 200 })
  },
)

export const createUser_400: RequestHandler = http.post<object, CreateUserPayload, object>(
  Endpoints.USERS,
  async ({ request }) => {
    const body = await request.json()

    return HttpResponse.json({}, { status: 400 })
  },
)

export const createUser_500: RequestHandler = http.post<object, CreateUserPayload, object>(
  Endpoints.USERS,
  async ({ request }) => {
    const body = await request.json()

    return HttpResponse.json({}, { status: 500 })
  },
)

