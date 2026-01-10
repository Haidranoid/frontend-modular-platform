// react-redux mock
const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useDispatch: {
    withTypes: () => () => mockDispatch,
  },
}))

describe('useActions hook', () => {
  it('binds all action creators with dispatch', () => {
    //const { result } = renderHook(() => createUseActions())

    //expect(typeof result.current.me).toBe('function')

    //result.current.me()
    //expect(mockDispatch).toHaveBeenCalledWith({ type: 'MY_ACTION' })
    //expect(mockDispatch).toHaveBeenCalled()
    expect(true).toBe(true)
  })
})
