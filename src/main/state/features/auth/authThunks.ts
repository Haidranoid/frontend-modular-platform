import { createAsyncThunk } from '@reduxjs/toolkit'

// Thunk asincrónico
export const fetchUser = createAsyncThunk<string>(
  'auth/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      const user = await new Promise<string>((resolve) =>
        setTimeout(() => resolve('User X'), 1000),
      )
      return user
    } catch (err) {
      return rejectWithValue('Error al obtener usuario')
    }
  },
)
