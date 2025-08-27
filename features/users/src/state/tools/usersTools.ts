import { SliceNames } from '@webapp/shared/constants'
import { createSliceTools, createCrudOnFulfilledMap } from '@webapp/shared/utils'
import { User, CrudApi } from '@webapp/shared/types'
import { usersApi } from '../api'
import { UsersState } from '../slice'

const crudOnFulfilledMap = createCrudOnFulfilledMap<UsersState, User>('users', 'user')

export const usersTools = createSliceTools<UsersState, CrudApi<User>>(
  SliceNames.Users,
  usersApi,
  crudOnFulfilledMap,
)
