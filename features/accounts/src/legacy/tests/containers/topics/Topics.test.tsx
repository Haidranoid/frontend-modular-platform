const getAllTopicsMock = jest.fn()

jest.mock('@hooks/use-actions', () => ({
  __esModule: true,
  default: () => ({ getAllTopics: getAllTopicsMock }),
}))

jest.mock('@hooks/use-typed-selector', () => ({
  __esModule: true,
  default: jest.fn(),
}))

import React from 'react'
import { renderWithProviders, screen } from '@test/utils/testing-library'
import { selectAllTopics, selectTopicStatus } from '@selectors/topics'
import {
  mockTopicAdvanced,
  mockTopicBasic,
  mockTopicIntermediate,
} from '@test/mocks/topics/topicsMocks'
import Topics from './Topics'
import useTypedSelector from '@hooks/use-typed-selector'
import { TypedUseSelectorHook } from 'react-redux'
import { AppReducerState } from '@reducers/app/app.reducer.types'
import { Topic } from '@interfaces/topics/topics.types'

describe('Topics Container', () => {
  let selectorTopicStatusMocked = { loading: false, error: null as null | string }
  let selectorTopicsMocked: Topic[] = []
  const mockedUseTypedSelector = useTypedSelector as jest.MockedFunction<
    TypedUseSelectorHook<AppReducerState>
  >

  beforeEach(() => {
    selectorTopicStatusMocked = { loading: false, error: null }
    selectorTopicsMocked = []
    getAllTopicsMock.mockClear()
    mockedUseTypedSelector.mockReset()

    mockedUseTypedSelector.mockImplementation((selector) => {
      if (selector === selectTopicStatus) {
        return selectorTopicStatusMocked
      }
      if (selector === selectAllTopics) {
        return selectorTopicsMocked
      }
    })
  })

  it('should render the container without crash', () => {
    renderWithProviders(<Topics />)
    expect(screen.getByTestId('topics-page')).toBeInTheDocument()
  })

  it('should display loading component', async () => {
    selectorTopicStatusMocked = { loading: true, error: null }
    renderWithProviders(<Topics />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('should display error component', async () => {
    selectorTopicStatusMocked = { loading: false, error: 'Error' }
    renderWithProviders(<Topics />)
    expect(screen.getByTestId('error-component')).toBeInTheDocument()
  })

  it('should render the resources', async () => {
    selectorTopicStatusMocked = { loading: false, error: null }
    selectorTopicsMocked = [mockTopicBasic, mockTopicIntermediate, mockTopicAdvanced]
    renderWithProviders(<Topics />)
    expect(screen.getAllByRole('link')).toHaveLength(3)
  })
})
