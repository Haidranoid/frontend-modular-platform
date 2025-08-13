import { SliceNames } from '@constants'
import createSliceTools from '@features/helpers/slice-tools/createSliceTools'
import { usersApi } from '@features/apis'
import { UsersState } from '@features/slices/users/usersSlice'
import { CrudApi } from '@features/types/apis'
import { User } from '@features/types'
import { createCrudOnFulfilledMap } from '@features/helpers/slice-tools/createCrudOnFulfilledMap'

const crudOnFulfilledMap = createCrudOnFulfilledMap<UsersState, User>('users', 'user')

const usersTools = createSliceTools<UsersState, CrudApi<User>>(
  SliceNames.Users,
  usersApi,
  crudOnFulfilledMap,
)

export default usersTools
