// features/auth/tools.ts
import { SliceNames } from '@constants'
import createSliceTools from '@utils/features/slice-tools/createSliceTools'
import usersApi from './usersApi'

const usersTools = createSliceTools(SliceNames.Users, usersApi, {
  onFulfilled: {
    fetchAll: (state, action) => {
      state.users = action.payload.users
    },
    fetchById: (state, action) => {
      state.user = action.payload.user
    },
    create: (state, action) => {
      state.users.push(action.payload.user)
    },
    update: (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.user.id ? action.payload.user : user,
      )
    },
    delete: () => {
      //state.users = state.users.filter((user) => user.id !== action.payload.userId)
    },
  },
})

export default usersTools
