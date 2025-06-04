import { http, HttpResponse, RequestHandler } from 'msw'
import Endpoints from '@lib/http-client/Endpoints'

const me: RequestHandler = http.get(Endpoints.ME, () => {
  return HttpResponse.json({}, { status: 200 })
})

const login: RequestHandler = http.post(Endpoints.LOGIN, () => {
  return HttpResponse.json({}, { status: 200 })
})

const authHandlers = [me, login]

export default authHandlers
