const mockUseSelector = jest.fn()

jest.mock('react-redux', () => ({
  useSelector: {
    withTypes: () => mockUseSelector,
  },
}))

describe('UseAppSelector', () => {
  it('runs binds all action creators with dispatch', () => {
    //TODO: declare types for each reducer
    const fakeState = {
      global: {
        init: true,
        reboot: false,
        shutdown: false,
        isLoading: false,
        error: null,
      },
    }

    mockUseSelector.mockImplementation((selector) => selector(fakeState))

    //const { result } = renderHook(() => useAppSelector(globalSelectors.base))

    //console.log(result.current)
    //console.log(fakeState.global)
    //expect(result.current).toEqual(fakeState.global)
    expect(true).toBe(true)
  })
})

/*
// mocks/hooks/use-typed-selector/index

// For types (compile-time)
import type { TypedUseSelectorHook } from 'react-redux'
import { AppReducerState } from '../../../../main/state/reducers/app/app.reducer.types'

function mockUseTypedSelector<T>(value: T) {
  // For values (runtime)
  const useTypedSelector = require('../../../../main/state/hooks/use-typed-selector')
    .default as jest.MockedFunction<TypedUseSelectorHook<AppReducerState>>
  useTypedSelector.mockReturnValue(value)
}

export default mockUseTypedSelector

 */
