import { SliceNames } from '@constants'
import createSliceTools from '@utils/features/slice-tools/createSliceTools'
import AuthenticationService from '@lib/auth-service/AuthenticationService'
import authApi from '@features/slices/auth/authApi'
import { AuthApi, OnFulfilledMap } from '@interfaces/features/api/api.types'
import { AuthState } from '@features/slices/auth/authSlice'

const onFulfilledMap: OnFulfilledMap<AuthState, AuthApi> = {
  me: (state, action) => {
    state.user = action.payload
  },
  login: (state, action) => {
    const { user, accessToken, refreshToken } = action.payload

    state.user = user
    AuthenticationService.startSession(accessToken, refreshToken)
  },
  logout: (state) => {
    state.user = null
    AuthenticationService.closeSession()
  },
}

const authTools = createSliceTools(SliceNames.Auth, authApi, onFulfilledMap)
const authThunks = authTools.thunks

export { authThunks }
export default authTools
