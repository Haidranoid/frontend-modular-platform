import { usersSlice } from '../slice'

export const initialUsersState = usersSlice.getInitialState()

export const usersReducer = usersSlice.reducer

export type InitialUsersState = typeof initialUsersState
