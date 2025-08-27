import { createBaseSlice } from '@webapp/shared/utils'
import { User } from '@webapp/shared/types'
import { usersTools } from '../tools'

export interface UsersState {
  users: User[]
  user: User | null
}

export const initialState: UsersState = {
  users: [],
  user: null,
}

export const usersSlice = createBaseSlice({
  name: usersTools.slice,
  initialState,
  reducers: {},
  extraReducers: usersTools.extraReducers,
})
