const getAllUsersMock = jest.fn()
const deleteUserMock = jest.fn()
const pushMock = jest.fn()
const redirectToMock = jest.fn()

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useHistory: jest.fn().mockImplementation(() => ({
    push: pushMock,
  })),
}))

jest.mock('@hooks/use-actions', () => ({
  __esModule: true,
  default: () => ({ getAllUsers: getAllUsersMock, deleteUser: deleteUserMock }),
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

import httpClient from '@lib/http-client/httpClient'
import { selectAllUsers, selectUsersStatus } from '@selectors/users'
import { renderWithProviders, screen, waitFor } from '@test/utils/testing-library'
import {
  mockAdminUser,
  mockGetAllUsersSuccess,
  mockStudentUser,
  mockTeacherUser,
} from '@test/mocks/users/usersMocks'
import userEvent from '@testing-library/user-event'
import Users from './Users'
import { User } from '@interfaces/authentication/authentication.types'
import useTypedSelector from '@hooks/use-typed-selector'
import type { TypedUseSelectorHook } from 'react-redux'
import { AppReducerState } from '@reducers/app/app.reducer.types'
import { UsersReducerState } from '@reducers/users/users.reducer.types'

describe('Users Container', () => {
  let user: ReturnType<typeof userEvent.setup>
  let selectorUsersStatusMocked: UsersReducerState = {
    loading: false,
    error: null,
    user: null,
    users: [],
  }
  const selectorAllUsersMocked: User[] = [mockAdminUser, mockTeacherUser, mockStudentUser]
  const mockedUseTypedSelector = useTypedSelector as jest.MockedFunction<
    TypedUseSelectorHook<AppReducerState>
  >
  const mockedHttpClient = httpClient as jest.Mock

  beforeAll(() => {
    user = userEvent.setup()
  })

  beforeEach(() => {
    getAllUsersMock.mockClear()
    deleteUserMock.mockClear()
    mockedHttpClient.mockClear()
    pushMock.mockClear()
    redirectToMock.mockClear()
    mockedUseTypedSelector.mockImplementation((selector) => {
      if (selector === selectAllUsers) {
        return selectorAllUsersMocked
      }
      if (selector === selectUsersStatus) {
        return selectorUsersStatusMocked
      }
    })
  })

  it('should be displayed the Users page', () => {
    renderWithProviders(<Users />)
    expect(screen.getByTestId('users-page')).toBeInTheDocument()
  })

  it('should render correctly all the fields', async () => {
    mockedHttpClient.mockResolvedValue(mockGetAllUsersSuccess)
    renderWithProviders(<Users />)

    const dialog = screen.getByRole('dialog')
    const createUserButton = screen.getByRole('button', { name: /^nuevo usuario$/i })
    const accordionList = screen.getByRole('list')
    const accordionListItems = screen.getAllByRole('listitem')

    expect(dialog).toBeInTheDocument()
    expect(createUserButton).toBeInTheDocument()
    expect(accordionList).toBeInTheDocument()
    expect(accordionListItems).toHaveLength(3)
  })

  it('should display loading component', async () => {
    selectorUsersStatusMocked = {
      ...selectorUsersStatusMocked,
      loading: true,
      error: null,
    }
    renderWithProviders(<Users />)

    const loadingElement = screen.getByRole('progressbar')
    expect(loadingElement).toBeInTheDocument()
  })

  it('should display error component', async () => {
    selectorUsersStatusMocked = {
      ...selectorUsersStatusMocked,
      loading: true,
      error: 'error',
    }
    renderWithProviders(<Users />)

    const errorElement = screen.getByTestId('error-component')
    expect(errorElement).toBeInTheDocument()
  })

  it('should expand the first element of the accordion list', async () => {
    renderWithProviders(<Users />)

    const accordionList = screen.getAllByRole('tab')
    const firstAccordionElement = accordionList[0]

    await user.click(firstAccordionElement)

    await waitFor(() => {
      expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    })
  })

  it('should expand and collapse the first element of the accordion list', async () => {
    renderWithProviders(<Users />)

    const accordionList = screen.getAllByRole('tab')
    const firstAccordionElement = accordionList[0]

    await user.click(firstAccordionElement)

    await waitFor(() => {
      expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    })

    await user.click(firstAccordionElement)

    await waitFor(() => {
      expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
    })
  })

  it('should click the button Editar', async () => {
    renderWithProviders(<Users />)

    const accordionList = screen.getAllByRole('tab')
    const firstAccordionElement = accordionList[0]

    await user.click(firstAccordionElement)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const editButton = screen.getByRole('button', { name: /editar/i })
    expect(editButton).toBeInTheDocument()

    await user.click(editButton)

    expect(pushMock).toHaveBeenCalled()
  })

  it('should click the button Eliminar', async () => {
    renderWithProviders(<Users />)

    const accordionList = screen.getAllByRole('tab')
    const firstAccordionElement = accordionList[0]

    await user.click(firstAccordionElement)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const deleteButton = screen.getByRole('button', { name: /eliminar/i })
    expect(deleteButton).toBeInTheDocument()

    await user.click(deleteButton)
  })

  it('should confirm delete the user in the dialog', async () => {
    renderWithProviders(<Users />)

    const accordionList = screen.getAllByRole('tab')
    const firstAccordionElement = accordionList[0]

    await user.click(firstAccordionElement)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const deleteButton = screen.getByRole('button', { name: /eliminar/i })
    expect(deleteButton).toBeInTheDocument()

    await user.click(deleteButton)

    const dialogElement = screen.getByRole('dialog')
    expect(dialogElement).toBeInTheDocument()

    const dialogDeleteButton = screen.getByRole('button', { name: /continuar/i })
    await user.click(dialogDeleteButton)
  })

  it('should confirm delete the user in the dialog with the correct userId', async () => {
    renderWithProviders(<Users />)

    const accordionList = screen.getAllByRole('tab')
    const firstAccordionElement = accordionList[0]

    await user.click(firstAccordionElement)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const deleteButton = screen.getByRole('button', { name: /eliminar/i })
    expect(deleteButton).toBeInTheDocument()

    await user.click(deleteButton)

    const dialogElement = screen.getByRole('dialog')
    expect(dialogElement).toBeInTheDocument()

    const dialogDeleteButton = screen.getByRole('button', { name: /continuar/i })
    expect(dialogDeleteButton).toBeInTheDocument()

    await user.click(dialogDeleteButton)

    await waitFor(() => {
      expect(deleteUserMock).toHaveBeenCalled()
    })

    //const calls = redirectToMock.mock.calls.map((call) => call[0])
    //console.log(calls)
    const [params, cb] = deleteUserMock.mock.calls[0]
    //console.log({ params, cb })

    // Confirm it's a function
    expect(typeof cb).toBe('function')

    // TODO - issue when multiple redirectTo are being called in the render process... fix it
    // Clear previous calls
    redirectToMock.mockClear()

    // Call it
    cb()
    expect(params).toEqual({ id: 1 })
    expect(redirectToMock).toHaveBeenCalledWith('/users')

    // Confirm it's a function
    //expect(typeof redirectFn).toBe('function')

    // Call it
    //redirectFn()

    // TODO: deal with this situation in the future
    //const redirectToMock = jest.fn((path) => () => {})
    //expect(redirectFn).toHaveBeenCalledWith(Paths.USERS)
  })

  it('should cancel the delete of user in the dialog', async () => {
    renderWithProviders(<Users />)

    const accordionList = screen.getAllByRole('tab')
    const firstAccordionElement = accordionList[0]
    await user.click(firstAccordionElement)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const deleteButton = screen.getByRole('button', { name: /eliminar/i })
    expect(deleteButton).toBeInTheDocument()

    await user.click(deleteButton)

    const dialogElement = screen.getByRole('dialog')
    expect(dialogElement).toBeInTheDocument()

    const dialogCancelButton = screen.getByRole('button', { name: /cancelar/i })
    await user.click(dialogCancelButton)
  })
})
