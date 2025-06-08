// features/counter/selectors.ts
import { createSelector } from 'reselect'

import { BaseState } from '@utils/features/base-slice/baseSlice'

export const createFlagsSelector = <S>() =>
  createSelector([(state: S & BaseState) => state], (state) => ({
    isLoading: state.isLoading,
    error: state.error,
  }))
