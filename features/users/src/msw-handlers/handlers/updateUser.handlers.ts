import { http, HttpResponse, RequestHandler } from 'msw'
import { Endpoints } from '#constants'
import { UpdateUserSuccess, UpdateUserPayload } from '#types'
import { updateUserSuccessFixture } from '../fixtures'

export const updateUser_200: RequestHandler = http.post<
  object,
  UpdateUserPayload,
  UpdateUserSuccess
>(Endpoints.USER_BY_ID, async ({ request }) => {
  const body = await request.json()

  return HttpResponse.json(updateUserSuccessFixture({ requestBody: body }), {
    status: 200,
  })
})

export const updateUser_400: RequestHandler = http.post<object, object, object>(
  Endpoints.USER_BY_ID,
  async () => {
    return HttpResponse.json({}, { status: 400 })
  },
)

export const updateUser_500: RequestHandler = http.post<object, object, object>(
  Endpoints.USER_BY_ID,
  async () => {
    return HttpResponse.json({}, { status: 500 })
  },
)
