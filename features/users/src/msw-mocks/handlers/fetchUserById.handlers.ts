import { createHandler } from '@webapp/shared'
import { Endpoints } from '#constants'
import { FetchUserByIdSuccess } from '#types'
import { fetchUserById_200_fixture } from '../fixtures'

const fetchUserByIdHandlers = createHandler<FetchUserByIdSuccess>({
  path: Endpoints.USER_BY_ID,
  method: 'get',
  success: () => fetchUserById_200_fixture({}),
  badRequest: () => ({}),
  serverError: () => ({}),
})

export const fetchUserById_200_handler = fetchUserByIdHandlers.success
export const fetchUserById_400_handler = fetchUserByIdHandlers.badRequest
export const fetchUserById_500_handler = fetchUserByIdHandlers.serverError
