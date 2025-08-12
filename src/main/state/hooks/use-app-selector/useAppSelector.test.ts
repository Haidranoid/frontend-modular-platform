// Mock de react-redux
const mockUseSelector = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: {
    withTypes: () => mockUseSelector,
  },
}))

import { renderHook } from '@test-utils'
import useAppSelector from './useAppSelector'
import { globalSelectors } from '@selectors'

describe('useAppSelector hook', () => {
  it('binds all action creators with dispatch', () => {
    //TODO: declare types for each reducer
    const fakeState = {
      global: {
        init: true,
        reboot: false,
        shutdown: false,
        isLoading: false,
        error: null,
      },
      // otras slices que tenga tu store...
    }

    // simular que useSelector llama al selector con nuestro estado falso
    mockUseSelector.mockImplementation((selector) => selector(fakeState))

    const { result } = renderHook(() => useAppSelector(globalSelectors.base))

    //console.log(result.current)
    //console.log(fakeState.global)
    expect(result.current).toEqual(fakeState.global)
  })
})
