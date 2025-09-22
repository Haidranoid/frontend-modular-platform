import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { ApiSchema, CallablesFromThunks } from '#types'
import { Thunks } from '../../create-slice/create-slice-tools'

export const createUseActions = <TApi extends ApiSchema>(
  thunks: Thunks<TApi>,
) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, Action>>()

  const actions: CallablesFromThunks<Thunks<TApi>> = useMemo(() => {
    const mapped = {} as CallablesFromThunks<Thunks<TApi>>

    for (const key in thunks) {
      mapped[key] = ((args: any) => dispatch(thunks[key](args))) as any
    }

    return mapped
  }, [dispatch, thunks])

  return actions
}

/*
export type ArgsOf<T> = T extends (arg: infer A, ...rest: any) => any ? A : never
export type ReturnOf<T> = T extends (arg: any, ...rest: any) => Promise<infer R>
  ? R
  : never

export type CallablesFromThunks<TThunks> = {
  [K in keyof TThunks]: (arg: ArgsOf<TThunks[K]>) => Promise<ReturnOf<TThunks[K]>>
}

   withDispatch: (dispatch) => {
      const mapped = {} as CallablesFromThunks<Thunks<TApi>>

      for (const key in thunks) {
        mapped[key] = ((args: any) => dispatch(thunks[key](args))) as any
      }

      return mapped
    },

    withDispatch: (dispatch) => {
      const mapped = {} as CallablesFromThunks<Thunks<TApi>>

      for (const key in thunks) {
        mapped[key] = ((args: any) =>
            dispatch(thunks[key](args)).unwrap()
        ) as any
      }

      return mapped
    },
 */
