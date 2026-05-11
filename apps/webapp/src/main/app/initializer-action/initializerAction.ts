import type { InitializerAction } from '@webapp/shared'
import { authInitializerAction } from '@webapp/auth'
import { accountsInitializerAction } from '@webapp/accounts'
import type { RootState } from '../../state'

const initializerAction: InitializerAction<RootState> = async (dispatch, getState) => {
  authInitializerAction(dispatch, getState)
  accountsInitializerAction(dispatch, getState)
}

export { initializerAction as webappInitializerAction }
