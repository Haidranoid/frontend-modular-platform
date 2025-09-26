import { http, HttpResponse, RequestHandler } from 'msw'
import { Endpoints } from '#constants'
import { GetMeSuccess } from '#state'
import { getMeSuccessFixture } from '../fixtures'

const me_200: RequestHandler = http.get<object, object, GetMeSuccess>(
  Endpoints.ME,
  async () => {
    //const body = await request.json()
    return HttpResponse.json(getMeSuccessFixture(), { status: 200 })
  },
)

export const meHandlers = [me_200]
