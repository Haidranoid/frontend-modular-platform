import { SliceNames } from '@constants'
import createSliceTools from '@features/helpers/slice-tools/createSliceTools'
import AuthenticationService from '@lib/auth-service/AuthenticationService'
import { authApi } from '@features/apis'
import { OnFulfilledMap } from '@features/types/apis'
import { AuthApi } from '@features/types/apis/auth'
import { AuthState } from '@features/slices/auth/authSlice'

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
  logout: (state) => {
    state.user = null
    AuthenticationService.closeSession()
  },
}

const authTools = createSliceTools(SliceNames.Auth, authApi, onFulfilledMap)

export default authTools
