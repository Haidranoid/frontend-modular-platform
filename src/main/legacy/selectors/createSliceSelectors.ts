import { createSelector } from 'reselect'
import { RootState } from '@store'
import { BaseState } from '@utils/features/base-slice/baseSlice'

// Define the structure of the selectors returned
type SliceSelectorFactory<T extends BaseState> = {
  base: (state: RootState) => T
  status: (state: RootState) => BaseState
}

export const createSliceSelectors = <T extends BaseState>(
  baseSelector: (state: RootState) => T,
): SliceSelectorFactory<T> => {
  const selectIsLoading = createSelector(baseSelector, (slice) => slice.isLoading)
  const selectError = createSelector(baseSelector, (slice) => slice.error)
  const selectStatus = createSelector(
    [selectIsLoading, selectError],
    (isLoading, error) => ({ isLoading, error }),
  )

  return {
    base: baseSelector,
    status: selectStatus,
  }
}
