import { createSliceTools, SliceNames } from '@webapp/shared'
import { accountsApi, AccountsApi } from '#api'
import { AccountsState } from './../initial-state'

export const accountsSliceTools = createSliceTools<AccountsState, AccountsApi>({
  sliceName: SliceNames.ACCOUNTS,
  api: accountsApi,
})
