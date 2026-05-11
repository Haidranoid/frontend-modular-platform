import type { InitializerAction } from '@webapp/shared'
import { authAsyncThunks, RootState } from '#state'

const initializerAction: InitializerAction<RootState> = async (dispatch, getState) => {
  const state = getState()

  if (state.auth.session) return

  await dispatch(authAsyncThunks.me())
}

export { initializerAction as authInitializerAction }
