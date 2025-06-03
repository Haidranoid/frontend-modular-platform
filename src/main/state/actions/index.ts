import AuthenticationActionTypes from './auth/AuthenticationActionTypes'
import GlobalActionTypes from './global/GlobalActionTypes'
import UsersActionTypes from './users/UsersActionTypes'

import AuthenticationActions from './auth/AuthenticationActions'
import GlobalActions from './global/GlobalActions'
import UsersActions from './users/UsersActions'

export { AuthenticationActionTypes, UsersActionTypes, GlobalActionTypes }
export type { AuthenticationActions, UsersActions, GlobalActions }
export type ApplicationActions = AuthenticationActions | GlobalActions | UsersActions
