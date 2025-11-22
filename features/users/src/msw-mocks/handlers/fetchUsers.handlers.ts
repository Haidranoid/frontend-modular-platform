import { createHandler } from '@webapp/shared'
import { Endpoints } from '#constants'
import { FetchUsersSuccess } from '#types'
import { fetchUsers_200_fixture } from '../fixtures'

const fetchUsersHandlers = createHandler<FetchUsersSuccess>({
  path: Endpoints.USERS,
  method: 'get',
  success: fetchUsers_200_fixture,
  badRequest: () => ({}),
  serverError: () => ({}),
})

export const fetchUsers_200_handler = fetchUsersHandlers.success
export const fetchUsers_400_handler = fetchUsersHandlers.badRequest
export const fetchUsers_500_handler = fetchUsersHandlers.serverError
