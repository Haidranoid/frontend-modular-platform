import { http, HttpResponse } from 'msw'
import { Endpoints } from '#constants'
import { LoginSuccess, LoginPayload } from '#types'
import { login_200_fixture } from '../fixtures'

export const login_200_handler = http.post<{}, LoginPayload, LoginSuccess>(
  Endpoints.LOGIN,
  async ({ request }) => {
    const body = await request.json()

    return HttpResponse.json(login_200_fixture({ requestBody: body }), {
      status: 200,
    })
  },
)

export const login_400_handler = http.post(Endpoints.LOGIN, () => {
  return HttpResponse.json({}, { status: 400 })
})

export const login_500_handler = http.post(Endpoints.LOGIN, () => {
  return HttpResponse.json({}, { status: 500 })
})
