import * as createAccountHandlers from './createAccount.handlers'
import * as fetchAccountsHandlers from './fetchAccounts.handlers'
import * as fetchAccountsEnhancedHandlers from './fetchAccountsEnhanced.handlers'
import * as fetchAccountByIdHandlers from './fetchAccountById.handlers'
import * as updateAccountHandlers from './updateAccount.handlers'
import * as deleteAccountHandlers from './deleteAccount.handlers'

const handlers = {
  ...createAccountHandlers,
  ...fetchAccountsHandlers,
  ...fetchAccountsEnhancedHandlers,
  ...fetchAccountByIdHandlers,
  ...updateAccountHandlers,
  ...deleteAccountHandlers,
}

export { handlers as accountsMswHandlers }
