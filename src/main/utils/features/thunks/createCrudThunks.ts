import { createThunk } from './createThunk'

type CrudEndpoints<T> = {
  get: () => Promise<T[]>
  getById?: (id: string) => Promise<T>
  create?: (data: Partial<T>) => Promise<T>
  update?: (data: T) => Promise<T>
  delete?: (id: string) => Promise<void>
}

export function createCrudThunks<T>(resourceName: string, api: CrudEndpoints<T>) {
  const prefix = (action: string) => `${resourceName}/${action}`

  return {
    fetchAll: api.get ? createThunk(prefix('fetchAll'), api.get) : undefined,
    getById: api.getById ? createThunk(prefix('getById'), api.getById) : undefined,
    create: api.create ? createThunk(prefix('create'), api.create) : undefined,
    update: api.update ? createThunk(prefix('update'), api.update) : undefined,
    remove: api.delete ? createThunk(prefix('delete'), api.delete) : undefined,
  }
}
