import { http, HttpResponse } from 'msw'
import { Endpoints } from '#constants'
import { FetchUsersSuccess } from '#types'
import { fetchUsers_200_fixture } from '../fixtures'

export const fetchUsers_200_handler = http.get<{}, {}, FetchUsersSuccess>(
  Endpoints.USERS,
  () => {
    return HttpResponse.json(fetchUsers_200_fixture(), {
      status: 200,
    })
  },
)

export const fetchUsers_400_handler = http.get(Endpoints.USERS, () => {
  return HttpResponse.json({}, { status: 400 })
})

export const fetchUsers_500_handler = http.get(Endpoints.USERS, () => {
  return HttpResponse.json({}, { status: 500 })
})
