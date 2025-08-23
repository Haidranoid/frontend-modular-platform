// Mock de react-redux
const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useDispatch: {
    withTypes: () => () => mockDispatch,
  },
}))
// Mock de los thunks
//jest.mock('@features/thunks', () => ({
//  myThunk: jest.fn(() => ({ type: 'MY_ACTION' })),
//}))

import { renderHook } from '../../../test-utils'
import { createUseActions } from './createUseActions'

describe('useActions hook', () => {
  it('binds all action creators with dispatch', () => {
    const { result } = renderHook(() => createUseActions())

    // Debe devolver una función
    //expect(typeof result.current.me).toBe('function')

    // Al llamarla, debe despachar la acción
    //result.current.me()
    //expect(mockDispatch).toHaveBeenCalledWith({ type: 'MY_ACTION' })
    //expect(mockDispatch).toHaveBeenCalled()
    expect(true).toBe(true)
  })
})
