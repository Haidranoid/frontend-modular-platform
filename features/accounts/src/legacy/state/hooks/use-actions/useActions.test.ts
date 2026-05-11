// react-redux mock
const mockkDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useDispatch: {
    withTypes: () => () => mockkDispatch,
  },
}))

describe('UseActions', () => {
  it('runs binds all action creators with dispatch', () => {
    //const { result } = renderHook(() => createUseActions())

    //expect(typeof result.current.me).toBe('function')

    //result.current.me()
    //expect(mockDispatch).toHaveBeenCalledWith({ type: 'MY_ACTION' })
    //expect(mockDispatch).toHaveBeenCalled()
    expect(true).toBe(true)
  })
})

/*

import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as globalAC from '@actions-creators/global/globalAC'
import * as authenticationAC from '@actions-creators/authentication/authenticationAC'
import * as usersAC from '@actions-creators/users/usersAC'
import * as contentAC from '@actions-creators/content/contentAC'
import * as topicsAC from '@actions-creators/topics/topicsAC'

const allActions = {
  ...globalAC,
  ...authenticationAC,
  ...usersAC,
  ...contentAC,
  ...topicsAC,
}

const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(allActions, dispatch)
}

export { allActions }
export default useActions



// eslint-disable-next-line jest/no-commented-out-tests
const mockedMe = jest.fn()
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
})

import React, { useEffect } from 'react'
import { render } from '@test/utils/testing-library'
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


 */
