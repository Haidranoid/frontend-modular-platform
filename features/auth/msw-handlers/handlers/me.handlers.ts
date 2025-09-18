import { http, HttpResponse, RequestHandler } from 'msw'
import { Endpoints } from "#constants";

const me: RequestHandler = http.get(Endpoints.ME, () => {
  return HttpResponse.json({}, { status: 200 })
})

export const meHandlers = [
  me,
]