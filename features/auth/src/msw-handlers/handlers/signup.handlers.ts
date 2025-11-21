import { http, HttpResponse } from 'msw'
import { Endpoints } from '#constants'
import { SignupPayload, SignupSuccess } from '#types'
import { signup_200_fixture } from '../fixtures'

export const signup_200_handler = http.post<{}, SignupPayload, SignupSuccess>(
  Endpoints.SIGNUP,
  async ({ request }) => {
    const body = await request.json()

    return HttpResponse.json(signup_200_fixture({ requestBody: body }), { status: 200 })
  },
)

export const signup_400_handler = http.post(Endpoints.SIGNUP, () => {
  return HttpResponse.json({}, { status: 400 })
})

export const signup_500_handler = http.post(Endpoints.SIGNUP, () => {
  return HttpResponse.json({}, { status: 500 })
})
