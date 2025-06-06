import { createAsyncThunk } from '@reduxjs/toolkit'

// Represent a thunk definition
type ThunkDef<Args, Result> = {
  fn: (args: Args) => Promise<Result>
}

// Represent the config for a group of thunks
type ThunkMap<N extends string, T extends Record<string, ThunkDef<any, any>>> = {
  namespace: N
  thunks: T
}

// Create a single thunk (optional, used for consistency)
export function createThunk<Args, Result>(
  fn: (args: Args) => Promise<Result>,
): ThunkDef<Args, Result> {
  return { fn }
}

// Create a set of thunks with a namespace prefix
export function createThunks<
  N extends string,
  T extends Record<string, ThunkDef<any, any>>,
>(config: ThunkMap<N, T>) {
  const { namespace, thunks } = config
  const result: Partial<Record<keyof T, any>> = {}

  for (const key in thunks) {
    const typePrefix = `${namespace}/${key}`
    result[key] = createAsyncThunk(typePrefix, thunks[key].fn)
  }

  // Properly infer types per key
  return result as {
    [K in keyof T]: ReturnType<
      typeof createAsyncThunk<
        T[K] extends ThunkDef<infer A, infer R> ? R : never,
        T[K] extends ThunkDef<infer A, infer R> ? A : never
      >
    >
  }
}
