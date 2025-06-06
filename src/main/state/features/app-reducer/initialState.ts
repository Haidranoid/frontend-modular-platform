import { initialBaseState, BaseState } from '@features/base-slice/baseSlice'
import { initialAuthState, AuthState } from '@features/auth/authSlice'
import { initialUsersState, UsersState } from '@features/users/usersSlice'

export type InitialAppState = {
  auth: AuthState & BaseState
  users: UsersState & BaseState
}

const initialStates = {
  auth: initialAuthState,
  users: initialUsersState,
}

export const initialAppState: InitialAppState = Object.entries(initialStates).reduce(
  (accumulator, [key, value]) => ({
    ...accumulator,
    [key]: { ...value, ...initialBaseState },
  }),
  {} as InitialAppState,
)
