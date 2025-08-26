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
