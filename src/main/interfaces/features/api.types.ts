// Para una API arbitraria
import { PayloadAction } from '@reduxjs/toolkit'

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

export type OnFulfilledMap<TApi extends Api> = {
  [K in keyof TApi]?: (state: any, action: PayloadAction<any>) => void
}
