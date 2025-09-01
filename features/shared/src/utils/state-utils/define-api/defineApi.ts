import {ApiFromSchema, RawApiSchema} from "#types";
import {MakeApiSchema, User} from "#types";
import {httpClient} from "@libraries/utils";

export function defineApi<S, T extends RawApiSchema>(
    api: ApiFromSchema<S, T>
): ApiFromSchema<S, T> {
    return api
}



/*
export interface CrudApi<S, E extends EntityId> extends Api<S> {
    fetchAll: {
        operation: () => Promise<E[]>
    }
    fetchById: {
        operation: (id: number) => Promise<E>
    }
    create: {
        operation: (payload: E) => Promise<E>
    }
    update: {
        operation: (payload: Partial<E>) => Promise<E>
    }
    delete: {
        operation: (id: number) => Promise<E>
    }
}

function getMetaArg<TArg>(action: Action): TArg {
  return (action as PayloadAction<any, string, { arg: TArg }>).meta.arg
}
export function createCrudApi<TState, Entity extends EntityId>(
  entitiesKey: keyof Draft<TState>,
  entityKey: keyof Draft<TState>,
): OnFulfilledMap<TState, CrudApi<TState,Entity>> {
  type EntitiesKeyType = typeof entitiesKey
  type EntityKeyType = typeof entityKey

  return {
    fetchAll: (state, action) => {
      state[entitiesKey] = action.payload as Draft<TState & BaseState>[EntitiesKeyType]
    },
    fetchById: (state, action) => {
      state[entityKey] = action.payload as Draft<TState & BaseState>[EntityKeyType]
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

      state[entitiesKey] = items.filter((item) => item.id !== id) as Draft<
        TState & BaseState
      >[EntitiesKeyType]
    },
  }
}
 */