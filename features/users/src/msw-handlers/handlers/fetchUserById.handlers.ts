import { http, HttpResponse } from 'msw'
import { Endpoints } from '#constants'
import { FetchUserByIdSuccess } from '#types'
import { fetchUserById_200_fixture } from '../fixtures'

export const fetchUserById_200_handler = http.post<{}, {}, FetchUserByIdSuccess>(
  Endpoints.USER_BY_ID,
  () => {
    return HttpResponse.json(fetchUserById_200_fixture(), {
      status: 200,
    })
  },
)

export const fetchUserById_400_handler = http.post(Endpoints.USER_BY_ID, () => {
  return HttpResponse.json({}, { status: 400 })
})

export const fetchUserById_500_handler = http.post(Endpoints.USER_BY_ID, () => {
  return HttpResponse.json({}, { status: 500 })
})
