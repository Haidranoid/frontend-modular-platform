import { useMemo } from 'react'
import { ThunkDispatch } from '@reduxjs/toolkit'
import type { ExtractArgsOfThunk, ExtractReturnOfThunk } from '#types'

export type Actions<Thunks> = {
  [K in keyof Thunks]: ExtractArgsOfThunk<Thunks[K]> extends void
    ? () => Promise<ExtractReturnOfThunk<Thunks[K]>>
    : (payload: ExtractArgsOfThunk<Thunks[K]>) => Promise<ExtractReturnOfThunk<Thunks[K]>>
}

export const createActions = <Thunks>(
  thunks: Thunks,
  dispatch: ThunkDispatch<any, any, any>,
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
