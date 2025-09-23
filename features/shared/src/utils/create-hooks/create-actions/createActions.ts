import { useMemo } from 'react'
import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import { ExtractArgsOfThunk, ExtractReturnOfThunk } from '#types'

export type Actions<Thunks> = {
  [K in keyof Thunks]: (
    args: ExtractArgsOfThunk<Thunks[K]>,
  ) => Promise<ExtractReturnOfThunk<Thunks[K]>>
}

export const createActions = <Thunks>(
  thunks: Thunks,
  dispatch: ThunkDispatch<any, any, Action>,
) => {
  const actions: Actions<Thunks> = useMemo(() => {
    const mapped = {} as Actions<Thunks>

    // @ts-ignore
    ;(Object.keys(thunks) as (keyof Thunks)[]).forEach((key) => {
      mapped[key] = ((args: any) =>
        // @ts-ignore
        dispatch(thunks[key](args)).unwrap()) as any
    })

    return mapped
  }, [dispatch, thunks])

  return actions
}

/*

const dispatch = useDispatch<ThunkDispatch<any, any, Action>>()

  const actions: CallablesFromThunks<Thunks<TApi>> = useMemo(() => {
    const mapped = {} as CallablesFromThunks<Thunks<TApi>>

    for (const key in thunks) {
      mapped[key] = ((args: any) => dispatch(thunks[key](args))) as any
    }

    return mapped
  }, [dispatch, thunks])

  return actions

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
