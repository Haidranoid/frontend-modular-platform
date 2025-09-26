//export type ErrorHandler = Error | object | string | null

export interface BaseState {
  isLoading: boolean
  error: string | null
}

export type UnifiedState<S = unknown> = S & BaseState

export interface EntityId {
  id: number
}
