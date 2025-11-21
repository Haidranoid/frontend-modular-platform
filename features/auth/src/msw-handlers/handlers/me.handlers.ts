import { http, HttpResponse } from 'msw'
import { Endpoints } from '#constants'
import { GetMeSuccess } from '#types'
import { getMe_200_fixture } from '../fixtures'

export const me_200_handler = http.get<{}, {}, GetMeSuccess>(Endpoints.ME, () => {
  return HttpResponse.json(getMe_200_fixture(), { status: 200 })
})

export const me_400_handler = http.get(Endpoints.ME, () => {
  //const body = await request.json()
  return HttpResponse.json({}, { status: 400 })
})

export const me_500_handler = http.get(Endpoints.ME, () => {
  return HttpResponse.json({}, { status: 500 })
})
