import { http, HttpResponse, RequestHandler } from 'msw'
import { Endpoints } from '#constants'
import { GetMeSuccess } from '#types'
import { getMeSuccessFixture } from '../fixtures'

export const me_200: RequestHandler = http.get<object, object, GetMeSuccess>(
  Endpoints.ME,
  async () => {
    //const body = await request.json()
    return HttpResponse.json(getMeSuccessFixture(), { status: 200 })
  },
)

export const me_400: RequestHandler = http.get<object, object, object>(
  Endpoints.ME,
  async () => {
    //const body = await request.json()
    return HttpResponse.json({}, { status: 400 })
  },
)

export const me_500: RequestHandler = http.get<object, object, object>(
  Endpoints.ME,
  async () => {
    //const body = await request.json()
    return HttpResponse.json({}, { status: 500 })
  },
)
