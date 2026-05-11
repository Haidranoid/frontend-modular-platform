import type { InitializerAction } from '@webapp/shared'
import { accountsAsyncThunks, RootState } from '#state'

const initializerAction: InitializerAction<RootState> = async (dispatch, getState) => {
  const state = getState()

  if (state.accounts.accountsList.length > 0) return

  await dispatch(accountsAsyncThunks.fetchAccounts())
}

export { initializerAction as accountsInitializerAction }
