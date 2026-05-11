import LoginMock from '@test/mocks/containers/authentication/login/LoginMock'
const meMock = jest.fn().mockResolvedValue(undefined)

jest.mock('@hooks/use-actions', () => ({
  __esModule: true,
  default: () => ({ me: meMock }),
}))

jest.mock('@hooks/use-typed-selector', () => ({
  __esModule: true,
  default: jest.fn(),
}))

jest.mock('@components/navigation-menu/NavigationMenu', () => ({
  __esModule: true,
  default: ({ children }) => <div data-testid="mock-navigation">{children}</div>,
}))

jest.mock('@containers/authentication/login/Login', () => ({
  __esModule: true,
  default: LoginMock,
  //default: () => <div data-testid="login-page">Login Page</div>,
  //default: lazy(() => import('../../test/mocks/containers/authentication/login/Login')),
}))

import React, { act } from 'react'
import type { TypedUseSelectorHook } from 'react-redux'
import { render, renderWithProviders, screen, waitFor } from '@test/utils/testing-library'
import { mockAdminUser } from '@test/mocks/authentication/authenticationMocks'
import useTypedSelector from '@hooks/use-typed-selector'
import { selectAuthStatus, selectCurrentUser } from '@selectors/authentication'
import { AppReducerState } from '@reducers/app/app.reducer.types'
import { User } from '@interfaces/authentication/authentication.types'
import App from './App'
import { axe } from 'jest-axe'

describe('App Container', () => {
  let selectorAuthStatusMocked: { loading: boolean; error: string | null } = {
    loading: true,
    error: null,
  }
  let selectorCurrentUserMocked: User | null = null
  const mockedUseTypedSelector = useTypedSelector as jest.MockedFunction<
    TypedUseSelectorHook<AppReducerState>
  >

  beforeEach(() => {
    //selectorAuthStatusMocked = { loading: true, error: null }
    mockedUseTypedSelector.mockClear()
    meMock.mockClear()

    mockedUseTypedSelector.mockImplementation((selector) => {
      if (selector === selectAuthStatus) {
        return selectorAuthStatusMocked
      }
      if (selector === selectCurrentUser) {
        return selectorCurrentUserMocked
      }
    })
  })

  it.skip('should test a11y', async () => {
    const { container } = renderWithProviders(<App />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should be mounted the App', async () => {
    selectorAuthStatusMocked = { loading: false, error: null }
    selectorCurrentUserMocked = null
    render(<App />)

    await waitFor(() => {
      expect(meMock).toHaveBeenCalledTimes(1)
    })

    const navigation = await screen.findByTestId('mock-navigation')
    expect(navigation).toBeInTheDocument()
  })

  it('should be loading at beginning', async () => {
    selectorAuthStatusMocked = { loading: true, error: null }
    render(<App />)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('should call the function me', async () => {
    render(<App />)

    await waitFor(() => {
      expect(meMock).toHaveBeenCalledTimes(1)
    })
  })

  it('should render the Home page if a session is found', async () => {
    //meMock.mockResolvedValue(mockGetMeSuccess)
    selectorAuthStatusMocked = { loading: false, error: null }
    selectorCurrentUserMocked = mockAdminUser
    render(<App />)

    const homePage = await screen.findByTestId('home-page')

    expect(homePage).toBeInTheDocument()
  })

  it.skip('should be loading at beginning, then fallback loading from Suspense, then Login', async () => {
    const { rerender } = render(<App />)

    // ✅ Step 1: Initial loading from Redux
    expect(screen.getByRole('progressbar')).toBeInTheDocument()

    // Simulate Redux loading complete
    await waitFor(() => {
      expect(meMock).toHaveBeenCalledTimes(1)
    })

    // ✅ Step 2: Simulate state update
    //mockState = { loading: false, error: null }
    rerender(<App />)

    // ✅ Step 3: Check Suspense fallback shows up
    expect(screen.getByRole('progressbar')).toBeInTheDocument()

    // Let Suspense/lazy settle
    await act(async () => {
      await Promise.resolve() // for microtasks
      await new Promise((res) => setTimeout(res, 0)) // for macrotasks
    })

    //screen.debug()
    // ✅ Step 4: Wait for a lazy-loaded component to appear
    await waitFor(() => {
      expect(screen.getByTestId('login-page')).toBeInTheDocument()
    })

    // ✅ Step 5: Ensure loading is gone
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
  })
})
