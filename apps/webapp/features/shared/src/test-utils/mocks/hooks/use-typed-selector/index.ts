// mocks/hooks/use-typed-selector/index

// For types (compile-time)
import type { TypedUseSelectorHook } from 'react-redux'
//import { RootState } from '@store'

function mockUseTypedSelector<T>(value: T) {
  // For values (runtime)
  //const useTypedSelector = require('../../../../main/state/hooks/use-typed-selector')
  //  .default as jest.MockedFunction<TypedUseSelectorHook<object>>
  //useTypedSelector.mockReturnValue(value)
}

export default mockUseTypedSelector
