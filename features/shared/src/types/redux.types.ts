import { AsyncThunk, AsyncThunkConfig } from '@reduxjs/toolkit'
import { ApiHttpRequest, ApiSchema } from './api.types'

/*
export type { AsyncThunk, AsyncThunkAction }
export type ExtractArgsOfAsync<T> = T extends (args: infer A) => Promise<any> ? A : never

//export type ArgsOf<OpReq extends ApiHttpRequest> = Parameters<OpReq>[0]

//export type ReturnOf<OpReq extends ApiHttpRequest> = Awaited<ReturnType<OpReq>>
*/

export type AsyncThunkGenerated<Req extends ApiHttpRequest> = AsyncThunk<
  ExtractReturnOfAsync<Req>,
  ExtractArgsOfAsync<Req>,
  AsyncThunkConfig
>

export type AsyncThunks<S extends object, TApi extends ApiSchema<S>> = {
  [K in keyof TApi]: AsyncThunkGenerated<TApi[K]['httpRequest']>
}

export type ExtractArgsOfAsync<T> = T extends () => Promise<any>
  ? void
  : T extends (args: infer A) => Promise<any>
    ? A
    : never

export type ExtractReturnOfAsync<T> = T extends (args: any) => Promise<infer R>
  ? R
  : never

export type ExtractArgsOfThunk<T> =
  T extends AsyncThunk<any, infer Arg, any> ? Arg : never

export type ExtractReturnOfThunk<T> =
  T extends AsyncThunk<infer Ret, any, any> ? Ret : never
