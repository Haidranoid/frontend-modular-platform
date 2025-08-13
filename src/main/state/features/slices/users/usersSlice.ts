import { createBaseSlice } from '@features/helpers/base-slice/baseSlice'
import { usersTools } from '@features/tools'
import { User } from '@features/types'

export interface UsersState {
  users: User[]
  user: User | null
}

export const initialUsersState: UsersState = {
  users: [],
  user: null,
}

export const usersSlice = createBaseSlice({
  name: usersTools.slice,
  initialState: initialUsersState,
  reducers: {},
  extraReducers: usersTools.extraReducers,
})
