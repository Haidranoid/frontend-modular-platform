// Para una API arbitraria
import { Draft, PayloadAction } from '@reduxjs/toolkit'
import {
  GetMeSuccess,
  LoginSuccess,
} from '@interfaces/auth/responses/authResponses.types'
import { LoginPayload } from '@interfaces/auth/payloads/authPayloads.types'
import { BaseState } from '@utils/features/base-slice/baseSlice'

export type Api = {
  [K in string]: (arg?: any) => Promise<any>
}

export interface AuthApi extends Api {
  me: () => Promise<GetMeSuccess>
  login: (credentials: LoginPayload) => Promise<LoginSuccess>
  logout: () => Promise<void>
}

export interface CrudApi<T> extends Api {
  fetchAll: () => Promise<T[]>
  fetchById: (id: number) => Promise<T>
  create: (payload: T) => Promise<T>
  update: (payload: Partial<T>) => Promise<T>
  delete: (id: number) => Promise<void>
}

/*
export type OnFulfilledMap<TState, TApi extends Api> = {
  [K in keyof TApi]?: (
    state: Draft<TState & BaseState>,
    action: PayloadAction<Awaited<ReturnType<TApi[K]>>>,
  ) => void
}*/

export type OnFulfilledMap<TState, TApi extends Api> = {
  [K in keyof TApi]?: (
    state: TState,
    action: PayloadAction<Awaited<ReturnType<TApi[K]>>>,
  ) => void
}
