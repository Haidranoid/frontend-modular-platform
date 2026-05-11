import { HttpHandler } from 'msw'
import { createHandler, HttpMethods } from '@webapp/shared'
import { Endpoints } from '#constants'
import { FetchAccountsSuccess } from '#types'
import { accountsMswFixtures } from '../fixtures'

const { fetchAccounts_200_fixture } = accountsMswFixtures

const fetchAccountsHandlers = createHandler<FetchAccountsSuccess>({
  path: Endpoints.ACCOUNTS,
  method: HttpMethods.GET,
  success: fetchAccounts_200_fixture,
  badRequest: () => ({}),
  serverError: () => ({}),
})

export const fetchAccounts_200_handler: HttpHandler = fetchAccountsHandlers.success
export const fetchAccounts_400_handler: HttpHandler = fetchAccountsHandlers.badRequest
export const fetchAccounts_500_handler: HttpHandler = fetchAccountsHandlers.serverError
