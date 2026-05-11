import { axe } from 'jest-axe'

const deleteMock = jest.fn()
const logoutMock = jest.fn()
const pushMock = jest.fn()

jest.mock('react-router-dom', () => ({
  __esModule: true,
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn().mockImplementation(() => ({
    push: pushMock,
  })),
}))

jest.mock('@hooks/use-actions', () => ({
  __esModule: true,
  default: () => ({ deleteUser: deleteMock, logout: logoutMock }),
}))

jest.mock('@hooks/use-typed-selector', () => ({
  __esModule: true,
  default: jest.fn(),
}))

import React from 'react'
import NavigationMenu from './NavigationMenu'
import { renderWithProviders, screen } from '@test/utils/testing-library'
import userEvent from '@testing-library/user-event'
import { User } from '@interfaces/authentication/authentication.types'
import { mockAdminUser } from '@test/mocks/users/usersMocks'
import useTypedSelector from '@hooks/use-typed-selector'
import type { TypedUseSelectorHook } from 'react-redux'
import { AuthenticationReducerState } from '@reducers/authentication/authentication.reducer.types'
import { AppReducerState } from '@reducers/app/app.reducer.types'
import { selectAuthStatus, selectCurrentUser } from '@selectors/authentication'

describe('NavigationMenu Component', () => {
  let user: ReturnType<typeof userEvent.setup>
  const selectorAuthStatusMocked: AuthenticationReducerState = {
    loading: false,
    error: null,
    user: null,
  }
  let selectorCurrentUserMocked: User | null = mockAdminUser
  const mockedUseTypedSelector = useTypedSelector as jest.MockedFunction<
    TypedUseSelectorHook<AppReducerState>
  >

  beforeAll(() => {
    user = userEvent.setup()
  })

  beforeEach(() => {
    pushMock.mockClear()
    mockedUseTypedSelector.mockImplementation((selector) => {
      if (selector === selectCurrentUser) {
        return selectorCurrentUserMocked
      }
      if (selector === selectAuthStatus) {
        return selectorAuthStatusMocked
      }
    })
  })

  it.skip('should test a11y', async () => {
    const { container } = renderWithProviders(<NavigationMenu>test</NavigationMenu>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should render the component without crashing', () => {
    renderWithProviders(<NavigationMenu>test</NavigationMenu>)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('should return a div if there is not a user', () => {
    selectorCurrentUserMocked = null
    renderWithProviders(<NavigationMenu>test</NavigationMenu>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  it('should open the drawer and display content of the drawer', async () => {
    selectorCurrentUserMocked = mockAdminUser
    renderWithProviders(<NavigationMenu>test</NavigationMenu>)
    const iconOpenDrawer = screen.getByTestId('open-drawer')
    expect(iconOpenDrawer).toBeInTheDocument()

    await user.click(iconOpenDrawer)

    const avatar = screen.getByLabelText(/admin/i)
    const topicsLink = screen.getByRole('link', { name: /contenido disponible/i })
    const uploadContentLink = screen.getByRole('link', { name: /subir contenido/i })
    const usersLink = screen.getByRole('link', { name: /usuarios existentes/i })
    const logoutButton = screen.getByText('Logout')

    expect(avatar).toBeInTheDocument()
    expect(topicsLink).toHaveAttribute('href', '/topics')
    expect(uploadContentLink).toHaveAttribute('href', '/content/upload')
    expect(usersLink).toHaveAttribute('href', '/users')
    expect(logoutButton).toBeInTheDocument()
  })

  it('should trigger the elements if the drawer', async () => {
    selectorCurrentUserMocked = mockAdminUser
    renderWithProviders(<NavigationMenu>test</NavigationMenu>)
    const iconOpenDrawer = screen.getByTestId('open-drawer')

    await user.click(iconOpenDrawer)

    const avatar = screen.getByLabelText(/admin/i)
    const topicsLink = screen.getByRole('link', { name: /contenido disponible/i })
    const uploadContentLink = screen.getByRole('link', { name: /subir contenido/i })
    const usersLink = screen.getByRole('link', { name: /usuarios existentes/i })
    const logoutButton = screen.getByRole('button', { name: /cerrar sesión/i })

    await user.click(avatar)
    await user.click(topicsLink)
    await user.click(uploadContentLink)
    await user.click(usersLink)
    await user.click(logoutButton)

    expect(iconOpenDrawer).toBeInTheDocument()
    //console.log(pushMock.mock.calls)
  })

  it('should trigger click in the toolbar', async () => {
    selectorCurrentUserMocked = mockAdminUser
    renderWithProviders(<NavigationMenu>test</NavigationMenu>)

    const toolbar = screen.getByRole('toolbar')

    await user.click(toolbar)

    const leftArrow = screen.getByTestId('ChevronLeftIcon')
    expect(leftArrow).toBeInTheDocument()

    await user.click(toolbar)
    const menuIcon = screen.getByTestId('MenuIcon')
    expect(menuIcon).toBeInTheDocument()
  })
})
