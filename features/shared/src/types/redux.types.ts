import { AsyncThunk } from '@reduxjs/toolkit'

export type ExtractArgsOfAsync<T> = T extends (args: infer A) => Promise<any> ? A : never

export type ExtractReturnOfAsync<T> = T extends (args: any) => Promise<infer R>
  ? R
  : never

export type ExtractArgsOfThunk<T> = T extends AsyncThunk<any, infer A, any> ? A : never

export type ExtractReturnOfThunk<T> = T extends AsyncThunk<infer R, any, any> ? R : never

export type CallablesFromThunks<TThunks> = {
  [K in keyof TThunks]: (
    arg: ExtractArgsOfThunk<TThunks[K]>,
  ) => Promise<ExtractReturnOfThunk<TThunks[K]>>
}
