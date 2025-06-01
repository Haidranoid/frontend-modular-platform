import { http, HttpResponse } from 'msw'
import Endpoints from '@lib/http-client/Endpoints'
import { mockAdminUser } from '@test/mocks/authentication/authenticationMocks'

const me = http.get(Endpoints.ME, () => {
  return HttpResponse.json(mockAdminUser, { status: 200 })
})

const login = http.post(Endpoints.LOGIN, () => {
  return HttpResponse.json(mockAdminUser, { status: 200 })
})

export default [me, login]
