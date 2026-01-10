import type { Reducer } from 'redux'
import { SliceNames } from '#constants'

export type SliceNamesType = typeof SliceNames

export type SliceNamesKeys = keyof SliceNamesType

export type SliceNamesValuesType = SliceNamesType[SliceNamesKeys]

export type SliceReducersMap = Record<SliceNamesValuesType, Reducer>

/*
export type InferReducerState<R> = R extends Reducer<infer S> ? S : never

export type StateFromReducers<R extends object> = {
  [K in keyof R]: InferReducerState<R[K]>;
};

type AtLeastOne<T, Keys extends keyof T = keyof T> = Keys extends keyof T
  ? { [K in Keys]: T[K] } & Partial<Omit<T, Keys>>
  : never;


export type AppInitialState<
  S extends object,
  T extends Record<PropertyKey, any> = typeof SliceNames,
  Keys extends keyof T = keyof T
> = {
  [K in keyof Keys]: S;
};

export type AppReducers<
  S extends object,
  T extends Record<PropertyKey, any> = typeof SliceNames,
  Keys extends keyof T = keyof T,
  Values extends keyof T[Keys] = T[Keys],
> = {
  [V in Values]: Reducer<S>;
};
 */
