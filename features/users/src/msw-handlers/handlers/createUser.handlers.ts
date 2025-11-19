import { http, HttpResponse } from 'msw'
import { Endpoints } from '#constants'
import { CreateUserSuccess, CreateUserPayload } from '#types'
import { createUser_200_fixture } from '../fixtures'

export const createUser_200_handler = http.post<{}, CreateUserPayload, CreateUserSuccess>(
  Endpoints.USER_BY_ID,
  async ({ request }) => {
    const body = await request.json()

    return HttpResponse.json(createUser_200_fixture({ requestBody: body }), {
      status: 200,
    })
  },
)

export const createUser_400_handler = http.post<{}, CreateUserPayload>(
  Endpoints.USER_BY_ID,
  () => {
    return HttpResponse.json({}, { status: 400 })
  },
)

export const createUser_500_handler = http.post<{}, CreateUserPayload>(
  Endpoints.USER_BY_ID,
  () => {
    return HttpResponse.json({}, { status: 500 })
  },
)
