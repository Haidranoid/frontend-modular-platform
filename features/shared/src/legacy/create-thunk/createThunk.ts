import { createAsyncThunk, AsyncThunk, AsyncThunkConfig } from '@reduxjs/toolkit'

export function createThunk<Returned, Args>(
  type: string,
  payloadCreator: (args: Args) => Promise<Returned>,
): AsyncThunk<Returned, Args, AsyncThunkConfig> {
  return createAsyncThunk<Returned, Args>(type, async (args, thunkAPI) => {
    try {
      return await payloadCreator(args)
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  })
}
