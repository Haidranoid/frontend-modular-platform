import { createAsyncThunk } from '@reduxjs/toolkit'

// Thunk asincrónico
export const fetchUser = createAsyncThunk<string>(
  'auth/fetchUser',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      // lógica asincrónica
      const result = await new Promise<string>((resolve) => {
        setTimeout(() => resolve('Ana María'), 1000)
      })

      // También podrías disparar login aquí si quisieras
      // dispatch(login(result))
      return result
    } catch (err) {
      return rejectWithValue('No se pudo obtener el usuario')
    }
  },
)
