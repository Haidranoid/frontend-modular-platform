const loginMock = jest.fn()
const replaceMock = jest.fn()
const useLocationMock = jest.fn()
jest.mock('@hooks/use-actions', () => ({
  __esModule: true,
  default: () => ({ login: loginMock }),
}))

jest.mock('@hooks/use-typed-selector', () => ({
  __esModule: true,
  default: jest.fn(),
}))

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useHistory: () => ({ replace: replaceMock }),
  useLocation: useLocationMock,
}))

import React from 'react'
import { renderWithProviders, screen, waitFor } from '@test/utils/testing-library'
import userEvent from '@testing-library/user-event'
import Login from './Login'
import type { TypedUseSelectorHook } from 'react-redux'
import { AppReducerState } from '@reducers/app/app.reducer.types'
import { User } from '@interfaces/authentication/authentication.types'
import useTypedSelector from '@hooks/use-typed-selector'
import { selectAuthStatus, selectCurrentUser } from '@selectors/authentication'
import { axe } from 'jest-axe'

describe('Login Container', () => {
  let user: ReturnType<typeof userEvent.setup>
  let selectorAuthStatusMocked = { loading: false, error: null }
  const selectorCurrentUserMocked: User | null = null
  const mockedUseTypedSelector = useTypedSelector as jest.MockedFunction<
    TypedUseSelectorHook<AppReducerState>
  >

  beforeAll(() => {
    user = userEvent.setup()
  })

  beforeEach(() => {
    mockedUseTypedSelector.mockReset()
    replaceMock.mockClear()
    useLocationMock.mockClear()
    loginMock.mockClear()

    mockedUseTypedSelector.mockImplementation((selector) => {
      if (selector === selectAuthStatus) {
        return selectorAuthStatusMocked
      }
      if (selector === selectCurrentUser) {
        return selectorCurrentUserMocked
      }
    })
  })

  it('should test a11y', async () => {
    const { container } = renderWithProviders(<Login />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should be displayed the Login page', () => {
    renderWithProviders(<Login />)
    //screen.debug
    //const all = screen.getAllByLabelText(/contraseña/i)
    //console.log(all)
    expect(screen.getByTestId('login-page')).toBeInTheDocument()
  })

  it('should render correctly all the fields', async () => {
    renderWithProviders(<Login />)

    const avatar = screen.getByRole('img')
    const title = screen.getByRole('heading')
    const username = screen.getByRole('textbox', { name: /correo/i })
    const password = screen.getByLabelText(/introducir tu contraseña/i)
    const checkbox = screen.getByRole('checkbox')
    const submit = screen.getByRole('button')

    expect(avatar).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(username).toBeInTheDocument()
    expect(password).toBeInTheDocument()
    expect(checkbox).toBeInTheDocument()
    expect(submit).toBeInTheDocument()
  })

  it('should click the checkbox and change the type to text', async () => {
    renderWithProviders(<Login />)

    const password = screen.getByLabelText(
      /introducir tu contraseña/i,
    ) as HTMLInputElement
    const checkbox = screen.getByRole('checkbox')

    expect(password.type).toBe('password')

    await user.click(checkbox)

    expect(password.type).toBe('text')
  })

  it('should type email and password', async () => {
    renderWithProviders(<Login />)

    const username = screen.getByRole('textbox', { name: /correo/i }) as HTMLInputElement
    const password = screen.getByLabelText(
      /introducir tu contraseña/i,
    ) as HTMLInputElement

    await user.clear(username)
    await user.clear(password)

    await user.type(username, 'admin@hotmail.com')
    await user.type(password, '12345678')

    expect(username).toHaveValue('admin@hotmail.com')
    expect(password).toHaveValue('12345678')
  })

  it('should call login function when press Enter button', async () => {
    renderWithProviders(<Login />)

    const password = screen.getByLabelText(
      /introducir tu contraseña/i,
    ) as HTMLInputElement

    await user.clear(password)
    await user.type(password, '12345678')
    await user.type(password, '{enter}')

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalled()
    })
  })

  it('should call login function when clicks the submit button', async () => {
    useLocationMock.mockReturnValue({ state: { from: '/login-mock' } })
    renderWithProviders(<Login />)

    const submit = screen.getByRole('button')

    await user.click(submit)

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalled()
    })

    const [, handleLoginSuccess] = loginMock.mock.calls[0]
    handleLoginSuccess()
    expect(replaceMock).toHaveBeenCalledWith('/login-mock')
  })

  it('should call login function when clicks the submit button and redirect to Home', async () => {
    useLocationMock.mockReturnValue({ state: undefined })
    renderWithProviders(<Login />)

    const submit = screen.getByRole('button')

    await user.click(submit)

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalled()
    })

    const [, handleLoginSuccess] = loginMock.mock.calls[0]
    handleLoginSuccess()
    expect(replaceMock).toHaveBeenCalledWith('/')
  })

  it('should display Loading... in button', async () => {
    selectorAuthStatusMocked = { loading: true, error: null }
    renderWithProviders(<Login />)

    const submit = screen.getByRole('button') as HTMLInputElement

    expect(submit).toHaveTextContent('Loading...')
  })

  it.skip('should throw an error', () => {
    let error = ''
    try {
      //sumPositiveNumbers(-5, 5);
    } catch (e) {
      if (e instanceof Error) {
        error = e.message
      }
    }

    expect(error).toBeDefined()
    expect(error).toBe('One of the numbers is negative')
  })
})
