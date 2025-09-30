import { useDispatch } from 'react-redux'
import { createActions } from '@webapp/shared'
import { authSlice } from '../../slice'

export const useActions = () => {
  const thunks = authSlice.thunks
  const dispatch = useDispatch()

  return createActions(thunks, dispatch)
}
/*

  const thunks = authSlice.thunks
  const dispatch = useDispatch<ThunkDispatch<any, any, Action>>()

  const actions: Actions<typeof thunks> = useMemo(() => {
    const mapped = {} as Actions<typeof thunks>

    (Object.keys(thunks) as (keyof typeof thunks)[]).forEach((key) => {
      mapped[key] = ((args: any) =>
          dispatch(thunks[key](args)).unwrap()
      ) as any
    })

    return mapped
  }, [dispatch, thunks])

  return actions

const mapped = {} as {
    [K in keyof typeof thunks]: (
      args: ExtractArgsOfThunk<typeof thunks[K]>
    ) => Promise<ExtractReturnOfThunk<typeof thunks[K]>>
  }

  (Object.keys(thunks) as (keyof typeof thunks)[]).forEach((key) => {
    mapped[key] = ((args: any) =>
        dispatch(thunks[key](args)).unwrap()
    ) as any
  })

  return mapped


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
