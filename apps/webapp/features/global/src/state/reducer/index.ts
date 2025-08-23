import { globalSlice } from '../slice'

export const initialGlobalState = globalSlice.getInitialState()

export const globalReducer = globalSlice.reducer

export type InitialGlobalState = typeof initialGlobalState