import { http, HttpResponse, RequestHandler } from 'msw'
import { Endpoints } from '#constants'
import { DeleteUserSuccess, DeleteUserPayload } from '#types'
import { deleteUserSuccessFixture } from '../fixtures'

export const deleteUser_200: RequestHandler = http.post<
  object,
  DeleteUserPayload,
  DeleteUserSuccess
>(Endpoints.USER_BY_ID, async ({ request }) => {
  const body = await request.json()

  return HttpResponse.json(deleteUserSuccessFixture({ requestBody: body }), {
    status: 200,
  })
})

export const deleteUser_400: RequestHandler = http.post<object, object, object>(
  Endpoints.USER_BY_ID,
  async () => {
    return HttpResponse.json({}, { status: 400 })
  },
)

export const deleteUser_500: RequestHandler = http.post<object, object, object>(
  Endpoints.USER_BY_ID,
  async () => {
    return HttpResponse.json({}, { status: 500 })
  },
)
