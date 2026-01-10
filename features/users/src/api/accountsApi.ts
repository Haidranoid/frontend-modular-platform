import type { ApiOperations, ApiSchema } from '@webapp/shared'
import { httpClient } from '@webapp/shared'
import type { AccountsState } from '#state'
import { Endpoints } from '#constants'
import {
  FetchAccountsSuccess,
  CreateAccountPayload,
  FetchAccountByIdSuccess,
  CreateAccountSuccess,
  UpdateAccountPayload,
  UpdateAccountSuccess,
  DeleteAccountSuccess,
  FetchAccountByIdPayload,
  DeleteAccountPayload,
} from '#types'

export interface AccountsOps extends ApiOperations {
  fetchAccounts: () => Promise<FetchAccountsSuccess>
  fetchAccountById: (payload: FetchAccountByIdPayload) => Promise<FetchAccountByIdSuccess>
  createAccount: (payload: CreateAccountPayload) => Promise<CreateAccountSuccess>
  updateAccount: (payload: UpdateAccountPayload) => Promise<UpdateAccountSuccess>
  deleteAccount: (payload: DeleteAccountPayload) => Promise<DeleteAccountSuccess>
}

export type AccountsApi = ApiSchema<AccountsState, AccountsOps>

export const accountsApi: AccountsApi = {
  fetchAccounts: {
    httpRequest: async () => {
      return await httpClient.get<FetchAccountsSuccess>({
        endpoint: Endpoints.ACCOUNTS,
      })
    },
    onSuccess: (state, action) => {
      const { accounts } = action.payload

      state.accountsList = accounts
    },
  },
  fetchAccountById: {
    httpRequest: async (payload) => {
      return await httpClient.get<FetchAccountByIdSuccess>({
        endpoint: Endpoints.ACCOUNT_BY_ID,
        endpointVariables: payload,
      })
    },
    onSuccess: (state, action) => {
      const { account } = action.payload

      state.accountById = account
    },
  },
  createAccount: {
    httpRequest: async (payload) => {
      return await httpClient.post<CreateAccountPayload, CreateAccountSuccess>({
        endpoint: Endpoints.ACCOUNTS,
        body: payload,
      })
    },
    onSuccess: (state, action) => {
      const { account } = action.payload

      state.accountById = account
    },
  },
  updateAccount: {
    httpRequest: async (payload) => {
      return await httpClient.patch<UpdateAccountPayload, UpdateAccountSuccess>({
        endpoint: Endpoints.ACCOUNT_BY_ID,
        endpointVariables: payload,
        body: payload,
      })
    },
    onSuccess: (state, action) => {
      const { account } = action.payload

      state.accountById = account
    },
  },
  deleteAccount: {
    httpRequest: async (payload) => {
      return await httpClient.delete<DeleteAccountSuccess>({
        endpoint: Endpoints.ACCOUNT_BY_ID,
        endpointVariables: payload,
      })
    },
    onSuccess: () => {
      //const { id, account } = action.payload
      //state.account = account
    },
  },
}
