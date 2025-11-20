import { http, HttpResponse } from 'msw'
import { Endpoints } from '#constants'
import { UpdateUserSuccess, UpdateUserPayload } from '#types'
import { updateUser_200_fixture } from '../fixtures'

export const updateUser_200_handler = http.post<{}, UpdateUserPayload, UpdateUserSuccess>(
  Endpoints.USER_BY_ID,
  async ({ request }) => {
    const body = await request.json()

    return HttpResponse.json(updateUser_200_fixture({ requestBody: body }), {
      status: 200,
    })
  },
)

export const updateUser_400_handler = http.post(Endpoints.USER_BY_ID, () => {
  return HttpResponse.json({}, { status: 400 })
})

export const updateUser_500_handler = http.post(Endpoints.USER_BY_ID, () => {
  return HttpResponse.json({}, { status: 500 })
})
