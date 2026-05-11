import { createFeatureSlice } from '@webapp/shared'
import { authApi, AuthApi } from '#api'
import { AuthState, initialState } from './initial-state'

const {
  slice: { reducer, actions },
  asyncThunks,
} = createFeatureSlice<AuthState, AuthApi>({
  sliceName: 'auth',
  initialState,
  api: authApi,
  //reducers: {},
  //extraReducers: (builder) => {
  //  authExtraReducers(builder)
  //},
})

export {
  reducer as authReducer,
  actions as authSyncActions,
  asyncThunks as authAsyncThunks,
}
