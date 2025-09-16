import type { Draft, PayloadAction } from '@reduxjs/toolkit'
import type { UnifiedState } from './common.types'

export type Operation<Args = any, Return = any> = (args: Args) => Promise<Return>

export type ReducerArgs<S, Op extends Operation> = (
  state: Draft<UnifiedState<S>>,
  action: PayloadAction<Awaited<ReturnType<Op>>>,
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
