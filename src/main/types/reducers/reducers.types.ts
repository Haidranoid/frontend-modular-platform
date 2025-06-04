import { appReducer } from '../../reducers/root/app/app.reducer'

export type AppReducerState = ReturnType<typeof appReducer>
export type GetAppReducerState = () => AppReducerState
