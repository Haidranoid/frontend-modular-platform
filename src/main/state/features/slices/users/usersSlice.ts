// features/users/usersSlice.ts
import { createBaseSlice } from '@utils/features/base-slice/baseSlice'
import usersTools from '@features/slices/users/usersTools'
import { User } from '@interfaces/users/users.types'

export interface UsersState {
  users: User[]
  user: User | null
}

export const initialUsersState: UsersState = {
  users: [],
  user: null,
}

const usersSlice = createBaseSlice({
  name: usersTools.slice,
  initialState: initialUsersState,
  reducers: {},
  extraReducers: usersTools.extraReducers,
})

export const usersActions = usersSlice.actions
export const usersReducer = usersSlice.reducer
