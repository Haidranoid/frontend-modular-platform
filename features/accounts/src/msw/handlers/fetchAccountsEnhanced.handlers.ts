import { createHandlerEnhanced, HttpMethods } from '@webapp/shared'
import { Endpoints } from '#constants'
import { FetchAccountsSuccess } from '#types'
import { accountsMswFixtures } from '../fixtures'

const { fetchAccounts_200_fixture } = accountsMswFixtures

const fetchAccountsEnhancedHandlers = createHandlerEnhanced<FetchAccountsSuccess>({
  endpoint: Endpoints.ACCOUNTS,
  method: HttpMethods.GET,
  fixturesMapping: {
    successful: {
      '200_OK': fetchAccounts_200_fixture,
    },
  },
})

export const fetchAccountsEnhanced_200_handler = fetchAccountsEnhancedHandlers['200_OK']
