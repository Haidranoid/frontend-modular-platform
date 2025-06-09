import { createAsyncThunk } from '@reduxjs/toolkit'

export function createThunk<Returned, Args extends object | undefined>(
  type: string,
  payloadCreator: (args: Args) => Promise<Returned>,
) {
  return createAsyncThunk<Returned, Args>(type, async (args, thunkAPI) => {
    try {
      return await payloadCreator(args)
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  })
}
