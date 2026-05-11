import { RouteBasePaths } from '@webapp/shared'

export enum AccountsRoutesPaths {
  ACCOUNTS_APP_ROOT_PATH = RouteBasePaths.ACCOUNTS_BASE,
  ACCOUNTS_APP_ROOT_LAYOUT_PATH = ACCOUNTS_APP_ROOT_PATH,
  ACCOUNTS_CREATE_PATH = ACCOUNTS_APP_ROOT_PATH + 'create',
  ACCOUNTS_UPDATE_PATH = ACCOUNTS_APP_ROOT_PATH + ':accountId/update',
  ACCOUNTS_DELETE_PATH = ACCOUNTS_APP_ROOT_PATH + ':accountId/delete',
}
