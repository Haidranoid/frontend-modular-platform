const mockedUseDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useDispatch: mockedUseDispatch,
}))
jest.mock('@actions-creators/global/globalAC', () => ({
  someAction: jest.fn(),
}))
jest.mock('@actions-creators/authentication/authenticationAC', () => ({}))
jest.mock('@actions-creators/users/usersAC', () => ({}))
jest.mock('@actions-creators/content/contentAC', () => ({}))
jest.mock('@actions-creators/topics/topicsAC', () => ({}))

import { renderHook } from '@test/utils/testing-library'
import useActions from './index'

describe('useActions hook', () => {
  it('binds all action creators with dispatch', () => {
    const dispatch = jest.fn()
    mockedUseDispatch.mockReturnValue(dispatch)

    const boundActions = { someAction: jest.fn() }
    jest.spyOn(require('redux'), 'bindActionCreators').mockReturnValue(boundActions)

    const { result } = renderHook(() => useActions())

    expect(mockedUseDispatch).toHaveBeenCalled()
    expect(result.current).toEqual(boundActions)
  })
})
