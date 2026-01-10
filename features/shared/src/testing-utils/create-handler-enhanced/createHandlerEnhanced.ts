import { http, HttpHandler, HttpResponse, DefaultBodyType } from 'msw'
import { curlyToColon } from '../curly-to-colon'
import {
  CreateHandlerEnhancedOptions,
  HandlerArgsEnhanced,
} from './createHandlerEnhanced.types'

//-----------------------------------------------------------------------------
export function makeHandlerEnhanced<
  Res extends DefaultBodyType,
  Req extends DefaultBodyType = {},
  Params extends Record<string, string> = {},
>(
  httpMethod: (path: string, resolver: (req: any) => any) => HttpHandler,
  path: string,
  status: number,
  resolver: (args: HandlerArgsEnhanced<Req, Params>) => Res,
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
export function createHandlerEnhanced<
  TSuccess,
  TReq = {},
  TParams extends Record<string, string> = {},
  TClient = any,
  TServer = any,
>(options: CreateHandlerEnhancedOptions<TSuccess, TReq, TParams, TClient, TServer>) {
  const { endpoint, method, fixturesMapping } = options
  const { successful, redirection, clientError, serverError } = fixturesMapping
  const httpMethod = http[method]

  const handlers: Record<string, HttpHandler> = {}

  function addHandlers<T>(
    group: Record<string, (args: HandlerArgsEnhanced<TReq, TParams>) => T> | undefined,
  ) {
    if (!group) return
    for (const [statusKey, resolver] of Object.entries(group)) {
      const status = Number(statusKey.split('_')[0])
      handlers[statusKey] = makeHandlerEnhanced(
        httpMethod,
        endpoint,
        status,
        resolver as any,
      )
    }
  }

  addHandlers(successful)
  addHandlers(redirection)
  addHandlers(clientError)
  addHandlers(serverError)

  return handlers
}
