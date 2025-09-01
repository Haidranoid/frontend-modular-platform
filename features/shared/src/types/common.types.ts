export interface BaseState {
  isLoading: boolean
  error: Error | object | string | null
}

export type UnifiedState<S> = S & BaseState

export interface EntityId {
  id: number
}
