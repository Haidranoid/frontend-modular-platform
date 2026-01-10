import type { Draft, PayloadAction } from '@reduxjs/toolkit'
import type { BaseState } from './common.types'

/*
export type ApiOperation<Args = any, Return = any> = Args extends void
  ? () => Promise<Return>
  : (args: Args) => Promise<Return>

*/
export type ApiHttpRequest = (args: any) => Promise<any>

export type ReducerArgs<S extends BaseState, Req extends ApiHttpRequest> = (
  state: Draft<S>,
  action: PayloadAction<Awaited<ReturnType<Req>>>,
) => void

export type ApiEntry<
  S,
  Req extends ApiHttpRequest,
  ReducerState extends BaseState = S & BaseState,
> = {
  httpRequest: Req
  onSuccess: ReducerArgs<ReducerState, Req>
  onError?: ReducerArgs<ReducerState, Req>
  onLoading?: ReducerArgs<ReducerState, Req>
}

export type ApiOperations = Record<string, ApiHttpRequest>

export type ApiSchema<S extends object, T extends ApiOperations = ApiOperations> = {
  [K in keyof T]: ApiEntry<S, T[K]>
}
