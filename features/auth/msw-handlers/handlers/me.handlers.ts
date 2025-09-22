import { http, HttpResponse, RequestHandler } from 'msw'
import { Endpoints } from '#constants'
import { GetMeSuccess } from '#state'
import { getMeSuccessFixture } from '../fixtures'

const me_200: RequestHandler = http.get(Endpoints.ME, () => {
  return HttpResponse.json<GetMeSuccess>(getMeSuccessFixture(), { status: 200 })
})

export const meHandlers = [me_200]
