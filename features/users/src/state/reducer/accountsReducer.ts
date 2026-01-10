import type { Reducer } from 'redux'
import type { AccountsState } from '../initial-state'
import { accountsSlice } from '../slice'

export const accountsReducer: Reducer<AccountsState> = accountsSlice.reducer
