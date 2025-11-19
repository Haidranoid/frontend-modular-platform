import { http, HttpResponse } from 'msw'
import { Endpoints } from '#constants'
import { DeleteUserSuccess, DeleteUserPayload } from '#types'
import { deleteUser_200_fixture } from '../fixtures'

export const deleteUser_200_handler = http.post<
  object,
  DeleteUserPayload,
  DeleteUserSuccess
>(Endpoints.USER_BY_ID, async ({ request }) => {
  const body = await request.json()

  return HttpResponse.json(deleteUser_200_fixture({ requestBody: body }), {
    status: 200,
  })
})

export const deleteUser_400_handler = http.post(Endpoints.USER_BY_ID, () => {
  return HttpResponse.json({}, { status: 400 })
})

export const deleteUser_500_handler = http.post(Endpoints.USER_BY_ID, () => {
  return HttpResponse.json({}, { status: 500 })
})
