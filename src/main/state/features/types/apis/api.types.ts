import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { BaseState } from '@features/helpers/base-slice/baseSlice'

export type Api = {
  [K in string]: (arg?: any) => Promise<any>
}

export interface CrudApi<T> extends Api {
  fetchAll: () => Promise<T[]>
  fetchById: (id: number) => Promise<T>
  create: (payload: T) => Promise<T>
  update: (payload: Partial<T>) => Promise<T>
  delete: (id: number) => Promise<void>
}

export type OnFulfilledMap<TState, TApi extends Api> = {
  [K in keyof TApi]?: (
    state: Draft<TState & BaseState>,
    action: PayloadAction<Awaited<ReturnType<TApi[K]>>>,
  ) => void
}
