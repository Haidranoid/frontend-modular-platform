import { http, HttpResponse, RequestHandler } from 'msw'
import { Endpoints } from '#constants'
import { FetchUserByIdSuccess } from '#types'
import { fetchUserByIdSuccessFixture } from '../fixtures'

export const fetchUserById_200: RequestHandler = http.post<
  object,
  object,
  FetchUserByIdSuccess
>(Endpoints.USER_BY_ID, async () => {
  return HttpResponse.json(fetchUserByIdSuccessFixture(), {
    status: 200,
  })
})

export const fetchUserById_400: RequestHandler = http.post<object, object, object>(
  Endpoints.USER_BY_ID,
  async () => {
    return HttpResponse.json({}, { status: 400 })
  },
)

export const fetchUserById_500: RequestHandler = http.post<object, object, object>(
  Endpoints.USER_BY_ID,
  async () => {
    return HttpResponse.json({}, { status: 500 })
  },
)
