import { http, HttpResponse, RequestHandler } from 'msw'
import { Endpoints } from '#constants'
import { CreateUserSuccess, CreateUserPayload } from '#types'
import { createUserSuccessFixture } from '../fixtures'

export const createUser_200: RequestHandler = http.post<
  object,
  CreateUserPayload,
  CreateUserSuccess
>(Endpoints.USER_BY_ID, async ({ request }) => {
  const body = await request.json()

  return HttpResponse.json(createUserSuccessFixture({ requestBody: body }), {
    status: 200,
  })
})

export const createUser_400: RequestHandler = http.post<
  object,
  CreateUserPayload,
  object
>(Endpoints.USER_BY_ID, async () => {
  return HttpResponse.json({}, { status: 400 })
})

export const createUser_500: RequestHandler = http.post<
  object,
  CreateUserPayload,
  object
>(Endpoints.USER_BY_ID, async () => {
  return HttpResponse.json({}, { status: 500 })
})
