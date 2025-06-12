import { SliceNames } from '@constants'
import createSliceTools from '@utils/features/slice-tools/createSliceTools'
import authApi from '@features/slices/auth/authApi'
import { AuthApi, OnFulfilledMap } from '@interfaces/features/api/api.types'
import { AuthState } from '@features/slices/auth/authSlice'

const onFulfilledMap: OnFulfilledMap<AuthState, AuthApi> = {
  me: (state, action) => {},
  login: (state, action) => {},
  logout: (state, action) => {},
}

const authTools = createSliceTools(SliceNames.Auth, authApi, onFulfilledMap)
const authThunks = authTools.thunks

export { authThunks }
export default authTools
