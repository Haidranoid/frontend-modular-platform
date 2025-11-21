import { createSlice, SliceNames } from '@webapp/shared'
import { usersApi } from '#api'

export const usersSlice = createSlice({
  sliceId: SliceNames.Users,
  api: usersApi,
  reducers: {},
  initialState: {
    userById: null,
    users: [],
  },
})
