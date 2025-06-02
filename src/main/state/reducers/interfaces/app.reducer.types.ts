import { appReducer } from '../root/app/app.reducer'

export interface BaseReducerState {
  loading: boolean
  error: string | null
}

export type AppReducerState = ReturnType<typeof appReducer>
export type GetAppReducerState = () => AppReducerState
