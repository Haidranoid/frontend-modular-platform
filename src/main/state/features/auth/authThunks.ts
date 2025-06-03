import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '../../actions/interfaces/authentication.types'
import Endpoints from '@lib/http-client/Endpoints'
import HttpMethods from '@lib/http-client/HttpMethods'
import { getErrorMessage } from '@utils'
import httpClient from '@lib/http-client/httpClient'

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

export const me = createAsyncThunk<User>('auth/me', async (_, { rejectWithValue }) => {
  try {
    const { data } = await httpClient({
      endpoint: Endpoints.ME,
      method: HttpMethods.GET,
    })

    return data as unknown as User
  } catch (e: unknown) {
    return rejectWithValue(getErrorMessage(e))
  } finally {
    //cb?.()
  }
})
