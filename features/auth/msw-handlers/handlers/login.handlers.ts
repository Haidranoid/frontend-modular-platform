import { http, HttpResponse, RequestHandler } from 'msw'
import { Endpoints } from "#constants";

const login: RequestHandler = http.post(Endpoints.LOGIN, () => {
  return HttpResponse.json({}, { status: 200 })
})

export const loginHandlers = [
  login,
]