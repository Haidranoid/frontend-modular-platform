import { usersSlice } from '#state'

export const initialUsersState = usersSlice.getInitialState()

export const usersReducer = usersSlice.reducer

export type InitialUsersState = typeof initialUsersState
