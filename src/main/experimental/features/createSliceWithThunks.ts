import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createThunks } from './createThunks'

type SliceWithThunksOptions<
  State,
  N extends string,
  T extends Record<string, { fn: (args: any) => Promise<any> }>,
> = {
  name: string
  initialState: State
  namespace: N
  thunks: T
  reducers?: Record<string, (state: State, action: PayloadAction<any>) => void>
  extraReducers?: (
    builder: ReturnType<typeof createSlice>['reducer'] extends infer R ? any : never,
  ) => void
}

export function createSliceWithThunks<
  State,
  N extends string,
  T extends Record<string, { fn: (args: any) => Promise<any> }>,
>(options: SliceWithThunksOptions<State, N, T>) {
  const thunks = createThunks({ namespace: options.namespace, thunks: options.thunks })

  const slice = createSlice({
    name: options.name,
    initialState: options.initialState,
    // @ts-ignore
    reducers: options.reducers || {},
    extraReducers: (builder) => {
      for (const key in thunks) {
        const thunk = thunks[key]
        builder
          .addCase(thunk.pending, (state: any) => {
            state.loading = true
            state.error = null
          })
          .addCase(thunk.fulfilled, (state: any, action: any) => {
            state.loading = false
            state.data = action.payload
          })
          .addCase(thunk.rejected, (state: any, action: any) => {
            state.loading = false
            state.error = action.error?.message || 'Request failed'
          })
      }

      if (options.extraReducers) {
        options.extraReducers(builder)
      }
    },
  })

  return {
    slice,
    thunks,
    actions: slice.actions,
    reducer: slice.reducer,
  }
}
