// mocks/hooks/use-typed-selector/index

// For types (compile-time)
import type { TypedUseSelectorHook } from 'react-redux'
import { AppReducerState } from '@state/app/reducers/app.reducer.types'

function mockUseTypedSelector<T>(value: T) {
  // For values (runtime)
  const useTypedSelector = require('../../../../main/state/hooks/use-typed-selector')
    .default as jest.MockedFunction<TypedUseSelectorHook<AppReducerState>>
  useTypedSelector.mockReturnValue(value)
}

export default mockUseTypedSelector
