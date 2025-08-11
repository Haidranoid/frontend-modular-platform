// eslint-disable-next-line jest/no-commented-out-tests
/*const mockedMe = jest.fn()
const mockedUseActions = jest.fn().mockImplementation(() => ({ me: mockedMe }))

jest.mock('./index', () => ({
  __esModule: true,
  default: mockedUseActions,
}))

describe('useActions', () => {
  it('should return all the actions available', () => {
    const useActions = require('./index').default
    const actions = useActions()
    expect(actions).toEqual({ me: mockedMe })
  })
})*/

import React, { useEffect } from 'react'
import { render } from '@test-utils'
import * as reactRedux from 'react-redux'
import * as redux from 'redux'
import useActions from './index'

// Component
const Component = () => {
  const actions = useActions()

  useEffect(() => {
    if (actions['someAction']) {
      actions['someAction']('test')
    }
  }, [actions])

  return <div>Test</div>
}

// Mock action creators
const mockActions = {
  someAction: jest.fn(),
  anotherAction: jest.fn(),
}

// Mock bindActionCreators
jest.mock('@actions-creators/global/globalAC', () => ({
  someAction: jest.fn(),
}))
jest.mock('@actions-creators/authentication/authenticationAC', () => ({}))
jest.mock('@actions-creators/users/usersAC', () => ({}))
jest.mock('@actions-creators/content/contentAC', () => ({}))
jest.mock('@actions-creators/topics/topicsAC', () => ({}))

describe('useActions hook', () => {
  it('binds actions with dispatch', () => {
    const dispatch = jest.fn()
    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(dispatch)

    const spyBindActionCreators = jest
      .spyOn(redux, 'bindActionCreators')
      .mockReturnValue(mockActions)

    render(<Component />)

    expect(spyBindActionCreators).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledTimes(0) // if not dispatched in test
    expect(mockActions.someAction).toHaveBeenCalledWith('test')
  })
})
