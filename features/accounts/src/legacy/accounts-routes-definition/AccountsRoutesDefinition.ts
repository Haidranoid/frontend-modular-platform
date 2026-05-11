import { AccountsRoutesIds } from './accounts-routes-ids'
import { AccountsRoutesPaths } from './accounts-routes-paths'
import { RouteRestrictionLevels } from '@webapp/shared'

export const AccountsRoutesDefinition = {
  accountsApp: {
    routeId: AccountsRoutesIds.ACCOUNTS_APP_ROUTE_ID,
    path: AccountsRoutesPaths.ACCOUNTS_APP_ROOT_PATH,
  },
  accountsHome: {
    routeId: AccountsRoutesIds.ACCOUNTS_HOME_ROUTE_ID,
    restrictionLevel: RouteRestrictionLevels.AUTH_REQUIRED,
  },
  accountsLayout: {
    routeId: AccountsRoutesIds.ACCOUNTS_LAYOUT_ROUTE_ID,
    path: AccountsRoutesPaths.ACCOUNTS_APP_ROOT_LAYOUT_PATH,
  },
  accountsCreate: {
    routeId: AccountsRoutesIds.ACCOUNTS_CREATE_ROUTE_ID,
    restrictionLevel: RouteRestrictionLevels.NON_AUTH_REQUIRED,
    path: AccountsRoutesPaths.ACCOUNTS_CREATE_PATH,
  },
  accountsUpdate: {
    routeId: AccountsRoutesIds.ACCOUNTS_UPDATE_ROUTE_ID,
    restrictionLevel: RouteRestrictionLevels.AUTH_REQUIRED,
    path: AccountsRoutesPaths.ACCOUNTS_UPDATE_PATH,
  },
  accountsDelete: {
    routeId: AccountsRoutesIds.ACCOUNTS_DELETE_ROUTE_ID,
    restrictionLevel: RouteRestrictionLevels.AUTH_REQUIRED,
    path: AccountsRoutesPaths.ACCOUNTS_DELETE_PATH,
  },
} as const
