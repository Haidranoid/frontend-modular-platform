import { HttpHandler } from 'msw'
import { createHandler, HttpMethods } from '@webapp/shared'
import { Endpoints } from '#constants'
import { FetchAccountByIdSuccess } from '#types'
import { accountsMswFixtures } from '../fixtures'

const { fetchAccountById_200_fixture } = accountsMswFixtures

const fetchAccountByIdHandlers = createHandler<FetchAccountByIdSuccess>({
  path: Endpoints.ACCOUNT_BY_ID,
  method: HttpMethods.GET,
  success: () => fetchAccountById_200_fixture({}),
  badRequest: () => ({}),
  serverError: () => ({}),
})

export const fetchAccountById_200_handler: HttpHandler = fetchAccountByIdHandlers.success
export const fetchAccountById_400_handler: HttpHandler =
  fetchAccountByIdHandlers.badRequest
export const fetchAccountById_500_handler: HttpHandler =
  fetchAccountByIdHandlers.serverError
