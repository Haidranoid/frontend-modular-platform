import { Action, PayloadAction } from '@reduxjs/toolkit'
import { CrudApi, OnFulfilledMap } from '@interfaces/features/api/api.types'

function getMetaArg<TArg>(action: Action): TArg {
  return (action as PayloadAction<any, string, { arg: TArg }>).meta.arg
}

export interface EntityId {
  id: number
}

export function createCrudOnFulfilledMap<TState, Entity extends EntityId>(
  entitiesKey: keyof TState,
  entityKey: keyof TState,
): OnFulfilledMap<TState, CrudApi<Entity>> {
  return {
    fetchAll: (state, action) => {
      state[entitiesKey] = action.payload as TState[typeof entitiesKey]
    },
    fetchById: (state, action) => {
      state[entityKey] = action.payload as TState[typeof entityKey]
    },
    create: (state, action) => {
      const items = state[entitiesKey] as Entity[]
      items.push(action.payload)
    },
    update: (state, action) => {
      const items = state[entitiesKey] as Entity[]
      const updated = action.payload
      const index = items.findIndex((item) => item.id === updated.id)

      if (index !== -1) items[index] = updated
    },
    delete: (state, action) => {
      const items = state[entitiesKey] as Entity[]
      const id = getMetaArg<number>(action)

      state[entitiesKey] = items.filter(
        (item) => item.id !== id,
      ) as TState[typeof entitiesKey]
    },
  }
}
