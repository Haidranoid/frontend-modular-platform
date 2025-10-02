'use strict';

var require$$0 = require('react');

var createActions = function createActions(thunks, dispatch) {
  var actions = require$$0.useMemo(function () {
    var mapped = {}

    // @ts-ignore
    ;
    Object.keys(thunks).forEach(function (key) {
      mapped[key] = function (args) {
        return (
          // @ts-ignore
          dispatch(thunks[key](args)).unwrap()
        );
      };
    });
    return mapped;
  }, [dispatch, thunks]);
  return actions;
};

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

exports.createActions = createActions;
