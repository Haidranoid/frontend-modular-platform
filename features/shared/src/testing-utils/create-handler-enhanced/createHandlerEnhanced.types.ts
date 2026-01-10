import { HttpMethods, HttpStatusKey } from '#constants'

export type SuccessStatus = Extract<HttpStatusKey, `2${string}`>
export type RedirectionStatus = Extract<HttpStatusKey, `3${string}`>
export type ClientErrorStatus = Extract<HttpStatusKey, `4${string}`>
export type ServerErrorStatus = Extract<HttpStatusKey, `5${string}`>

export type HandlerArgsEnhanced<Req = {}, Params extends Record<string, string> = {}> = {
  body: Req
  params: Params
}

export type SuccessHandlers<Res, Req = {}, Params extends Record<string, string> = {}> = {
  [K in SuccessStatus]?: (args: HandlerArgsEnhanced<Req, Params>) => Res
}

export type RedirectionHandlers<
  Res,
  Req = {},
  Params extends Record<string, string> = {},
> = {
  [K in RedirectionStatus]?: (args: HandlerArgsEnhanced<Req, Params>) => Res
}

export type ClientErrorHandlers<
  Res,
  Req = {},
  Params extends Record<string, string> = {},
> = {
  [K in ClientErrorStatus]?: (args: HandlerArgsEnhanced<Req, Params>) => Res
}

export type ServerErrorHandlers<
  Res,
  Req = {},
  Params extends Record<string, string> = {},
> = {
  [K in ServerErrorStatus]?: (args: HandlerArgsEnhanced<Req, Params>) => Res
}

export interface CreateHandlerEnhancedOptions<
  TSuccess,
  TReq = {},
  TParams extends Record<string, string> = {},
  TClient = any,
  TServer = any,
> {
  endpoint: string
  method: HttpMethods
  fixturesMapping: {
    successful: SuccessHandlers<TSuccess, TReq, TParams>
    redirection?: RedirectionHandlers<any, TReq, TParams>
    clientError?: ClientErrorHandlers<TClient, TReq, TParams>
    serverError?: ServerErrorHandlers<TServer, TReq, TParams>
  }
}
