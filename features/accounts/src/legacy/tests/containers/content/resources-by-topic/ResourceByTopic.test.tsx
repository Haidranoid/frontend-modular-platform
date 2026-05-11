import { selectResourcesByTopic, selectTopicStatus } from '@selectors/topics'

const getResourcesByTopicMock = jest.fn()

jest.mock('react-router-dom', () => ({
  __esModule: true,
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ topic: 'BASIC' }),
}))

jest.mock('@hooks/use-actions', () => ({
  __esModule: true,
  default: () => ({ getResourcesByTopic: getResourcesByTopicMock }),
}))

jest.mock('@hooks/use-typed-selector', () => ({
  __esModule: true,
  default: jest.fn(),
}))

import React from 'react'
import { renderWithProviders, screen } from '@test/utils/testing-library'
import {
  mockSingleContentOne,
  mockSingleContentTwo,
} from '@test/mocks/content/contentMocks'
import ResourcesByTopic from './ResourcesByTopic'
import useTypedSelector from '@hooks/use-typed-selector'
import { Content } from '@interfaces/content/content.types'
import { TypedUseSelectorHook } from 'react-redux'
import { AppReducerState } from '@reducers/app/app.reducer.types'
import { selectCurrentUser } from '@selectors/authentication'
import { User } from '@interfaces/authentication/authentication.types'
import { mockAdminUser } from '@test/mocks/authentication/authenticationMocks'

describe('ResourcesByTopic Container', () => {
  let selectorTopicStatusMocked = { loading: false, error: null as null | string }
  let selectorResourcesByTopicMocked: Content[] = []
  const selectorCurrentUserMocked: User | null = mockAdminUser
  const mockedUseTypedSelector = useTypedSelector as jest.MockedFunction<
    TypedUseSelectorHook<AppReducerState>
  >

  beforeEach(() => {
    selectorTopicStatusMocked = { loading: false, error: null }
    selectorResourcesByTopicMocked = []
    mockedUseTypedSelector.mockReset()
    mockedUseTypedSelector.mockClear()

    mockedUseTypedSelector.mockImplementation((selector) => {
      if (selector === selectTopicStatus) {
        return selectorTopicStatusMocked
      }
      if (selector === selectResourcesByTopic) {
        return selectorResourcesByTopicMocked
      }
      if (selector === selectCurrentUser) {
        return selectorCurrentUserMocked
      }
    })
  })

  it('should render the container without crash', () => {
    renderWithProviders(<ResourcesByTopic />)
    expect(screen.getByTestId('resources-by-topic-page')).toBeInTheDocument()
  })

  it('should display loading component', async () => {
    selectorTopicStatusMocked = { loading: true, error: null }
    renderWithProviders(<ResourcesByTopic />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('should display error component', async () => {
    selectorTopicStatusMocked = { loading: false, error: 'Error' }
    renderWithProviders(<ResourcesByTopic />)
    expect(screen.getByTestId('error-component')).toBeInTheDocument()
  })

  it('should render the resources', async () => {
    selectorTopicStatusMocked = { loading: false, error: null }
    selectorResourcesByTopicMocked = [mockSingleContentOne, mockSingleContentTwo]
    renderWithProviders(<ResourcesByTopic />)
    expect(screen.getAllByRole('presentation')).toHaveLength(2)
  })
})
