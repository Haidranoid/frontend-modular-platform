/*
export type ArgsOf<T> = T extends (arg: infer A, ...rest: any) => any ? A : never
export type ReturnOf<T> = T extends (arg: any, ...rest: any) => Promise<infer R> ? R : never

export type CallablesFromThunks<TThunks> = {
  [K in keyof TThunks]: (arg: ArgsOf<TThunks[K]>) => Promise<ReturnOf<TThunks[K]>>
}

export const createUseActions = <TThunks extends Record<string, any>>(thunks: TThunks) => {
  const dispatch = useDispatch<Dispatch>()

  const actions = useMemo(() => {
    const mapped = {} as CallablesFromThunks<TThunks>

    for (const key in thunks) {
      mapped[key] = ((args: any) => dispatch(thunks[key](args))) as any
    }

    return mapped
  }, [dispatch, thunks])

  return {
    ...actions,
  } as CallablesFromThunks<TThunks>
}
*/
