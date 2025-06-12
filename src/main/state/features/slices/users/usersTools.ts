// features/auth/tools.ts
import { SliceNames } from '@constants'
import createSliceTools from '@utils/features/slice-tools/createSliceTools'
import usersApi from './usersApi'
import { UsersState } from '@features/slices/users/usersSlice'
import { CrudApi } from '@interfaces/features/api/api.types'
import { User } from '@interfaces/users/users.types'
import { createCrudOnFulfilledMap } from '@utils/features/slice-tools/createCrudOnFulfilledMap'

/*
const onFulfilledMap: OnFulfilledMap<UsersState, CrudApi<User>> = {
  fetchAll: (state, action) => {
    state.users = action.payload
  },
  fetchById: (state, action) => {
    state.user = action.payload
  },
  create: (state, action) => {
    state.users.push(action.payload)
  },
  update: (state, action) => {
    state.users = state.users.map((user) =>
      user.id === action.payload.id ? action.payload : user,
    )
  },
  delete: () => {
    //state.users = state.users.filter((user) => user.id !== action.payload.userId)
  },
}*/

const crudOnFulfilled = createCrudOnFulfilledMap<UsersState, User>('users', 'user')

const usersTools = createSliceTools<UsersState, CrudApi<User>>(
  SliceNames.Users,
  usersApi,
  crudOnFulfilled,
  //onFulfilledMap,
)

const usersThunks = usersTools.thunks

export { usersThunks }
export default usersTools
