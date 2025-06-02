import store from '../old'
import { ThunkDispatch } from 'redux-thunk'
import { AppReducerState } from '../../reducers/interfaces/app.reducer.types'
import { Action } from 'redux'

export type AppDispatch = ThunkDispatch<AppReducerState, unknown, Action>
export type RootState = ReturnType<typeof store.getState>
export type StoreType = typeof store
