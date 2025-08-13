import { createSelector } from 'reselect'
import { RootState } from '@store'

const selectUsers = (state: RootState) => state.users

const usersSelectors = {
  users: createSelector(selectUsers, (s) => s.users),
  user: createSelector(selectUsers, (s) => s.user),
  status: createSelector(selectUsers, (s) => ({
    isLoading: s.isLoading,
    error: s.error,
  })),
}

export default usersSelectors
