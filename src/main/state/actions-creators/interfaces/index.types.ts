import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
//import { AppReducerState } from '@reducers/interfaces/app.reducer.types'

export type TypedThunk<
  A extends Action = Action,
  ReturnType = Promise<void>,
> = ThunkAction<ReturnType, object, unknown, A>
//> = ThunkAction<ReturnType, AppReducerState, unknown, A>

export type TypedActionCreator<A extends Action, P = void> = (
  params: P,
  cb?: Callback,
) => TypedThunk<A>
