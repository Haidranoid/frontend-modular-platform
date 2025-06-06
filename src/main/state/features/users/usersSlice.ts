// features/users/usersSlice.ts
import { createBaseSlice } from '../base-slice/baseSlice'
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from './usersThunk'
import { User } from '@interfaces/users/users.types'

interface UsersState {
  users: User[]
  user: User | null
}

const initialState: UsersState = {
  users: [],
  user: null,
}

const usersSlice = createBaseSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload.users
    })
    builder.addCase(getSingleUser.fulfilled, (state, action) => {
      state.user = action.payload.user
    })
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.users.push(action.payload.user)
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.user.id ? action.payload.user : user,
      )
    })
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      //state.users = state.users.filter((user) => user.id !== action.payload.userId)
    })
  },
})

const usersActions = usersSlice.actions
const usersReducer = usersSlice.reducer

export { usersActions, usersReducer }
