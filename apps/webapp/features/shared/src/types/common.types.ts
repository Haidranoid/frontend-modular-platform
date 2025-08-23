export interface BaseState {
    isLoading: boolean
    error: Error | object | string | null
}

export interface EntityId {
    id: number
}