import { createFeatureSlice } from '@webapp/shared'
import { accountsApi, AccountsApi } from '#api'
import { AccountsState, initialState } from './initial-state'

const {
  slice: { reducer, actions },
  asyncThunks,
} = createFeatureSlice<AccountsState, AccountsApi>({
  sliceName: 'accounts',
  initialState,
  api: accountsApi,
  //reducers: {},
  //extraReducers: (builder) => {
  //  accountsExtraReducers(builder)
  //},
})

export {
  reducer as accountsReducer,
  actions as accountsSyncActions,
  asyncThunks as accountsAsyncThunks,
}
