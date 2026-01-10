//import type { Reducer } from 'redux'
import {
  combineReducers,
  configureStore,
  Reducer,
  StateFromReducersMapObject,
  createReducer,
} from '@reduxjs/toolkit'
import { reduxLogger } from '../redux-logger'
import { WebappRootState, AuthState } from '#state'
import { Roles } from '#constants'

export interface ConfigureAppStoreParams<R> {
  reducers: R
  initialState?: any
}

export function configureAppStore<R extends Record<string, Reducer>>({
  reducers,
  initialState,
}: ConfigureAppStoreParams<R>) {
  // TODO - make this code dynamic to work with storybook
  if (!reducers.auth) {
    //@ts-ignore
    reducers.auth = mockAuthReducer(initialState?.auth)
  }

  const rootReducer = combineReducers(reducers)

  return configureStore<StateFromReducersMapObject<R> & WebappRootState>({
    //@ts-ignore
    reducer: rootReducer,
    // TODO - this logic override the initialState from mockAuthReducer
    preloadedState: initialState,
    //@ts-ignore
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({ thunk: true }).concat(reduxLogger)
    },
    devTools: {
      name: 'Redux Devtools',
      shouldHotReload: false,
    },
  })
}

export function mockAuthReducer(authInitialState: AuthState | null) {
  let authInitialStateMocked: AuthState = {
    isLoading: false,
    error: null,
    isAuthenticated: true,
    session: {
      id: 4305125789246172,
      username: 'Kaylah_Durgan16',
      role: Roles.ADMIN,
      email: 'Mike28@gmail.com',
      firstName: 'Frederique',
      lastName: 'Blanda',
    },
  }

  if (authInitialState) {
    authInitialStateMocked = {
      ...authInitialStateMocked,
      ...authInitialState,
    }
  }

  return createReducer<AuthState>(authInitialStateMocked, () => {})
}
