export interface BaseState {
  isLoading: boolean
  error: Error | object | string | null
}

export type UnifiedState<S = unknown> = S & BaseState

export interface EntityId {
  id: number
}
