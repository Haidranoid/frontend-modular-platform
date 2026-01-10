import type { DefaultBodyType } from 'msw'
import { HttpMethods } from '#constants'

export interface HandlerArgs<
  Req extends DefaultBodyType,
  Params extends Record<string, string> = {},
> {
  body: Req
  params: Params
}

export interface HandlerOptions<
  Res extends DefaultBodyType,
  Req extends DefaultBodyType,
  Params extends Record<string, string>,
> {
  path: string
  method: HttpMethods
  success: (args: HandlerArgs<Req, Params>) => Res
  badRequest?: (args: HandlerArgs<Req, Params>) => any
  serverError?: (args: HandlerArgs<Req, Params>) => any
}
