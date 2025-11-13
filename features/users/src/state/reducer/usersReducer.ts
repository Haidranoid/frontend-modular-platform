import { usersSlice } from '../slice'
export type { UsersState } from '#types'
export type { Reducer } from 'redux'

// ================== getting rootReducer from slice ===========================
export const usersReducer = usersSlice.reducer

// ================== getting initialState from slice ==========================
export const initialUsersState = usersSlice.initialState
