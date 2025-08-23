import { createBaseSlice } from '@webapp/shared/state-utils'
import { User } from '@webapp/shared/types'
import { usersTools } from '../tools'

export interface UsersState {
  users: User[]
  user: User | null
}

const initialUsersState: UsersState = {
  users: [],
  user: null,
}

export const usersSlice = createBaseSlice({
  name: usersTools.slice,
  initialState: initialUsersState,
  reducers: {},
  extraReducers: usersTools.extraReducers,
})
