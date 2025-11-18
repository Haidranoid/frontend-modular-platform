import { http, HttpResponse, RequestHandler } from 'msw'
import { Endpoints } from '#constants'
import { FetchUsersSuccess } from '#types'
import { fetchUsersSuccessFixture } from '../fixtures'

export const fetchUsers_200: RequestHandler = http.post<
  object,
  object,
  FetchUsersSuccess
>(Endpoints.USER_BY_ID, async () => {
  return HttpResponse.json(fetchUsersSuccessFixture(), {
    status: 200,
  })
})

export const fetchUsers_400: RequestHandler = http.post<object, object, object>(
  Endpoints.USER_BY_ID,
  async () => {
    return HttpResponse.json({}, { status: 400 })
  },
)

export const fetchUsers_500: RequestHandler = http.post<object, object, object>(
  Endpoints.USER_BY_ID,
  async () => {
    return HttpResponse.json({}, { status: 500 })
  },
)
