import { SliceNames } from '@webapp/shared/constants'
import { createSliceTools, createCrudOnFulfilledMap } from '@webapp/shared/utils'
import { User, CrudApi } from '@webapp/shared/types'
import { UsersState, usersApi } from '#state'

const crudOnFulfilledMap = createCrudOnFulfilledMap<UsersState, User>('users', 'user')

export const usersTools = createSliceTools<UsersState, CrudApi<User>>(
  SliceNames.Users,
  usersApi,
  crudOnFulfilledMap,
)
