import { createSelector } from 'reselect'
import { RootState } from '../store'

const baseSelector = (state: RootState) => state

export const usersSelectors = {
  users: createSelector(baseSelector, (s) => s.users),
  user: createSelector(baseSelector, (s) => s.user),
  status: createSelector(baseSelector, (s) => ({
    isLoading: s.isLoading,
    error: s.error,
  })),
}
