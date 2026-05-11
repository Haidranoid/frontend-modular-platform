import * as createAccountFixtures from './createAccount.fixture'
import * as deleteAccountFixtures from './deleteAccount.fixture'
import * as fetchAccountByIdFixtures from './fetchAccountById.fixture'
import * as fetchAccountsFixtures from './fetchAccounts.fixture'
import * as updateAccountFixtures from './updateAccount.fixture'

const fixtures = {
  ...createAccountFixtures,
  ...deleteAccountFixtures,
  ...fetchAccountByIdFixtures,
  ...fetchAccountsFixtures,
  ...updateAccountFixtures,
}

export { fixtures as accountsMswFixtures }
