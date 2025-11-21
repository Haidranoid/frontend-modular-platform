import { usersSlice } from '../slice'

// ================== getting rootReducer from slice ===========================
export const usersReducer = usersSlice.reducer

// ================== getting initialState from slice ==========================
export const initialUsersState = usersSlice.initialState
