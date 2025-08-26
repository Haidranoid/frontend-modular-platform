import { SliceNames } from '@webapp/shared/constants'
import { createSliceTools } from '@webapp/shared/utils'
import { AuthenticationService } from '@webapp/shared/utils'
import { OnFulfilledMap } from '@webapp/shared/types'
import { AuthState, AuthApi, authApi } from '#state'

const onFulfilledMap: OnFulfilledMap<AuthState, AuthApi> = {
  me: (state, action) => {
    state.user = action.payload
  },
  login: (state, action) => {
    const { user, accessToken, refreshToken } = action.payload

    state.isAuthenticated = true
    state.user = user
    AuthenticationService.startSession(accessToken, refreshToken)
  },
  signup: (state, action) => {
    const { user, accessToken, refreshToken } = action.payload

    state.isAuthenticated = true
    state.user = user
    AuthenticationService.startSession(accessToken, refreshToken)
  },
  logout: (state) => {
    state.user = null
    AuthenticationService.closeSession()
  },
}

export const authTools = createSliceTools(SliceNames.Auth, authApi, onFulfilledMap)
