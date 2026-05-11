const createUserMock = jest.fn()
const redirectToMock = jest.fn()

jest.mock('@hooks/use-actions', () => ({
  __esModule: true,
  default: () => ({ createUser: createUserMock }),
}))

jest.mock('@hooks/use-typed-selector', () => ({
  __esModule: true,
  default: jest.fn(),
}))

jest.mock('@lib/http-client/httpClient', () => ({
  __esModule: true,
  default: jest.fn(),
}))

jest.mock('@utils', () => ({
  __esModule: true,
  ...jest.requireActual('@utils'), // retain all actual exports
  redirectTo: redirectToMock,
}))

import React from 'react'
import httpClient from '@lib/http-client/httpClient'
import { selectUsersStatus } from '@selectors/users'
import { renderWithProviders, screen } from '@test/utils/testing-library'
import UserCreate from './UserCreate'
import useTypedSelector from '@hooks/use-typed-selector'
import type { TypedUseSelectorHook } from 'react-redux'
import { AppReducerState } from '@reducers/app/app.reducer.types'
import { UsersReducerState } from '@reducers/users/users.reducer.types'

describe('UserCreate Container', () => {
  let selectorUsersStatusMocked: UsersReducerState = {
    loading: false,
    error: null,
    user: null,
    users: [],
  }
  const mockedUseTypedSelector = useTypedSelector as jest.MockedFunction<
    TypedUseSelectorHook<AppReducerState>
  >
  const mockedHttpClient = httpClient as jest.Mock

  beforeEach(() => {
    createUserMock.mockClear()
    mockedHttpClient.mockClear()
    redirectToMock.mockClear()
    mockedUseTypedSelector.mockImplementation((selector) => {
      if (selector === selectUsersStatus) {
        return selectorUsersStatusMocked
      }
    })
  })

  it('should render the container without crash', () => {
    renderWithProviders(<UserCreate />)
    expect(screen.getByTestId('user-create-page')).toBeInTheDocument()
  })

  it('should render the loading component', async () => {
    selectorUsersStatusMocked = { loading: true, error: null, user: null, users: [] }
    renderWithProviders(<UserCreate />)

    const loadingComponent = screen.getByRole('progressbar')
    expect(loadingComponent).toBeInTheDocument()
  })

  it('should render the error component', async () => {
    selectorUsersStatusMocked = { loading: true, error: 'Error', user: null, users: [] }
    renderWithProviders(<UserCreate />)

    const errorComponent = screen.getByTestId('error-component')
    expect(errorComponent).toBeInTheDocument()
  })

  it('should render correctly the UserViewer', async () => {
    renderWithProviders(<UserCreate />)

    const userViewer = screen.getByRole('contentinfo')
    expect(userViewer).toBeInTheDocument()
  })
})
