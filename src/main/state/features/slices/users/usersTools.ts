// features/auth/tools.ts
import { SliceNames } from '@constants'
import createSliceTools from '@utils/features/slice-tools/createSliceTools'
import usersApi from './usersApi'
import { UsersState } from '@features/slices/users/usersSlice'
import { CrudApi } from '@interfaces/features/api/api.types'
import { User } from '@interfaces/users/users.types'
import { createCrudOnFulfilledMap } from '@utils/features/slice-tools/createCrudOnFulfilledMap'

const crudOnFulfilled = createCrudOnFulfilledMap<UsersState, User>('users', 'user')

const usersTools = createSliceTools<UsersState, CrudApi<User>>(
  SliceNames.Users,
  usersApi,
  crudOnFulfilled,
)

const usersThunks = usersTools.thunks

export { usersThunks }
export default usersTools
