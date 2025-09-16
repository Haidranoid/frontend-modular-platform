import type { Draft, PayloadAction } from '@reduxjs/toolkit'
import type { UnifiedState } from './common.types'

export type Operation<Args = any, Return = any> = (args: Args) => Promise<Return>

export type ArgsOf<Op extends Operation> = Parameters<Op>[0]

export type ReturnOf<Op extends Operation> = Awaited<ReturnType<Op>>

export type ReducerArgs<S, Op extends Operation> = (
  state: Draft<UnifiedState<S>>,
  action: PayloadAction<Awaited<ReturnType<Op>>>,
  //action: PayloadAction<ReturnOf<Op>, string, { args: ArgsOf<Op> }>
) => void

export type ThunkValues<S, Op extends Operation> = {
  operation: Op
  onSuccess: ReducerArgs<S, Op>
  onError?: ReducerArgs<S, Op>
  onLoading?: ReducerArgs<S, Op>
}

export type RawApiSchema = Record<string, Operation>

export type ApiFromSchema<S = unknown, T extends RawApiSchema = RawApiSchema> = {
  [K in keyof T]: ThunkValues<S, T[K]>
}

export type MakeApiSchema<T extends RawApiSchema> = T

export type ApiOperations = Record<string, Operation>

export type ApiEntry<S, Op extends Operation> = {
  operation: Op
  onSuccess: ReducerArgs<S, Op>
  onError?: ReducerArgs<S, Op>
  onLoading?: ReducerArgs<S, Op>
}

export type ApiSchema<S = unknown, T extends ApiOperations = ApiOperations> = {
  [K in keyof T]: ApiEntry<S, T[K]>
}
