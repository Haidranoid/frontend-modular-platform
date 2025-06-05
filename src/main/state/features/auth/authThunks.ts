import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '@types'
import { Endpoints, HttpMethods } from '@constants'
import httpClient from '@lib/http-client/httpClient'

export const me = createAsyncThunk<User>('auth/me', async (_, { rejectWithValue }) => {
  try {
    const { data } = await httpClient<User>({
      endpoint: Endpoints.ME,
      method: HttpMethods.GET,
    })

    return data
  } catch (e: unknown) {
    return rejectWithValue(e)
  } finally {
    //cb?.()
  }
})
