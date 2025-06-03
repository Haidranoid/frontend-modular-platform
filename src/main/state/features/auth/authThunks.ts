import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '@types'
import Endpoints from '@lib/http-client/Endpoints'
import HttpMethods from '@lib/http-client/HttpMethods'
import httpClient from '@lib/http-client/httpClient'
import { getErrorMessage } from '@utils'

export const me = createAsyncThunk<User>('auth/me', async (_, { rejectWithValue }) => {
  try {
    const { data } = await httpClient<User>({
      endpoint: Endpoints.ME,
      method: HttpMethods.GET,
    })

    return data
  } catch (e: unknown) {
    return rejectWithValue(getErrorMessage(e))
  } finally {
    //cb?.()
  }
})
