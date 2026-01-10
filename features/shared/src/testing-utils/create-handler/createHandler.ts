import { http, HttpHandler, HttpResponse, DefaultBodyType } from 'msw'
import { curlyToColon } from '../curly-to-colon'
import { HandlerArgs, HandlerOptions } from './createHandler.types'

//-----------------------------------------------------------------------------
export function makeHandler<
  Res extends DefaultBodyType,
  Req extends DefaultBodyType = {},
  Params extends Record<string, string> = {},
>(
  httpMethod: (path: string, resolver: (req: any) => any) => HttpHandler,
  path: string,
  status: number,
  resolver: (args: HandlerArgs<Req, Params>) => Res,
): HttpHandler {
  const colonPath = curlyToColon(path)

  return httpMethod(colonPath, async ({ request, params }) => {
    const raw = await request.json().catch(() => undefined)
    const body: Req = (raw ?? {}) as Req
    const typedParams = params as Params

    return HttpResponse.json(resolver({ body, params: typedParams }), { status })
  })
}

//-----------------------------------------------------------------------------
export function createHandler<
  Res extends DefaultBodyType,
  Req extends DefaultBodyType = {},
  Params extends Record<string, string> = {},
>(
  options: HandlerOptions<Res, Req, Params>,
): {
  success: HttpHandler
  badRequest: HttpHandler
  serverError: HttpHandler
} {
  const { path, method, success, badRequest, serverError } = options
  const httpMethod = http[method]

  return {
    success: makeHandler(httpMethod, path, 200, success),
    badRequest: makeHandler(httpMethod, path, 400, badRequest ?? (() => ({}))),
    serverError: makeHandler(httpMethod, path, 500, serverError ?? (() => ({}))),
  }
}
