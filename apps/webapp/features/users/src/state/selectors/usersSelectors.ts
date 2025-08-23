import { createSelector } from 'reselect'
//import { RootState } from '@store'

interface RootState {
  users: {
    users: object
    user: object
    isLoading: boolean
    error: string
  }
}


const selectUsers = (state: RootState) => state.users

export const usersSelectors = {
  users: createSelector(selectUsers, (s) => s.users),
  user: createSelector(selectUsers, (s) => s.user),
  status: createSelector(selectUsers, (s) => ({
    isLoading: s.isLoading,
    error: s.error,
  })),
}
