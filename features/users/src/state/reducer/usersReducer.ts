import { usersSlice } from '../slice'
export type { UsersState } from '#types'

// ================== getting rootReducer from slice ===========================
export const usersReducer = usersSlice.reducer

// ================== getting initialState from slice ==========================
export const initialUsersState = usersSlice.initialState
