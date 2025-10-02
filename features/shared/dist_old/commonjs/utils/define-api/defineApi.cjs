'use strict';

var defineApi = 'defineApi';
/*
import { ApiOperations, ApiSchema, User } from '#types'
import { SliceNames } from '#constants'
import { createSlice } from '../create-slice'

export interface AuthOps extends ApiOperations {
  me: () => Promise<GetMeSuccess>
  login: (credentials: LoginPayload) => Promise<LoginSuccess>
  signup: (credentials: SignupPayload) => Promise<SignupSuccess>
  logout: () => Promise<void>
}

export const authApi: ApiSchema<AuthState, AuthOps> = {
  me: {
    operation: async () => {
      return {} as GetMeSuccess
    },
    onSuccess: (state, action) => {
      state.user = action.payload
    },
  },
  login: {
    operation: async (credentials) => {
      return {} as LoginSuccess
    },
    onSuccess: (state, action) => {
      const { user, accessToken, refreshToken } = action.payload

      state.isAuthenticated = true
      state.user = user
    },
  },
  signup: {
    operation: async (credentials) => {
      return new Promise<SignupSuccess>((resolve, reject) => {})
    },
    onSuccess: (state, action) => {
      const { user, accessToken, refreshToken } = action.payload

      state.isAuthenticated = true
      state.user = user
    },
  },
  logout: {
    operation: async () => {
      return new Promise((resolve) => {})
    },
    onSuccess: (state, action) => {
      state.user = null
    },
  },
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

export const authSlice = createSlice({
  sliceId: SliceNames.Auth,
  api: authApi,
  reducers: {},
  initialState: {
    user: null,
    isAuthenticated: false,
  },
})

export interface LoginPayload {
  username: string
  password: string
}

export interface SignupPayload {
  username: string
  password: string
}

export type GetMeSuccess = User

export interface LoginSuccess {
  accessToken: string
  refreshToken: string
  user: User
}

export interface SignupSuccess {
  accessToken: string
  refreshToken: string
  user: User
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

exports.defineApi = defineApi;
