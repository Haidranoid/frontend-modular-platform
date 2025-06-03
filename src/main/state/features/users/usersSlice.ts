// features/users/usersSlice.ts
import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { createBaseSlice, BaseState } from '@utils'

interface UsersState {
  list: string[]
}

const initialState: UsersState & BaseState = {
  list: [],
  loading: false,
  error: null,
}

export const fetchUsers = createAsyncThunk<string[]>(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const users = await new Promise<string[]>((resolve) =>
        setTimeout(() => resolve(['Ana', 'Juan', 'Luisa']), 1500),
      )
      return users
    } catch (err) {
      return rejectWithValue('Error al obtener usuarios')
    }
  },
)

const usersSlice = createBaseSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<string>) {
      state.list.push(action.payload)
    },
    removeUser(state, action: PayloadAction<string>) {
      state.list = state.list.filter((u) => u !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.list = action.payload
      state.loading = false
    })
  },
})

export const { addUser, removeUser } = usersSlice.actions
export default usersSlice.reducer
