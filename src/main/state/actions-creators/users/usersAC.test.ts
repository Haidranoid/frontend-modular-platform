/*jest.mock('@lib/http-client/httpClient', () => ({
  __esModule: true,
  default: jest.fn(),
}))

import store, { initialRootState, configureAppStore } from '@store'
import httpClient from '@lib/http-client/httpClient'
import { UsersReducerState } from '@reducers/interfaces/users.reducer.types'
import { getAllUsers, getSingleUser, createUser, updateUser, deleteUser } from './usersAC'
import {
  mockAdminUser,
  mockTeacherUser,
  mockStudentUser,
  mockCreatedStudentUser,
  mockAdminUserUpdated,
  mockCreateStudentUserPayload,
  mockAdminUserUpdatePayload,
  mockDeleteUserPayload,
  mockGetAllUsersSuccess,
  mockGetSingleUserSuccess,
  mockCreateUserSuccess,
  mockUpdateUserSuccess,
  mockDeleteUserSuccess,
} from '@test/mocks/users/usersMocks'
import { initialUsersReducerState } from '@reducers/users/users.reducer'
import { AppDispatch } from '@store/interfaces/index.types'
import { GlobalTypes } from '@actions'

describe('usersAC', () => {
  // Get fresh state
  let usersState: UsersReducerState = initialUsersReducerState
  const mockedHttpClient = httpClient as jest.Mock
  const dispatch: AppDispatch = store.dispatch

  beforeEach(() => {
    dispatch({ type: GlobalTypes.INIT_RESET })
    mockedHttpClient.mockClear()
  })

  test('getAllUsers() is called successfully', async () => {
    mockedHttpClient.mockResolvedValue(mockGetAllUsersSuccess)
    usersState = store.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)

    await dispatch(getAllUsers())

    usersState = store.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)
    expect(usersState.users).toEqual([mockAdminUser, mockTeacherUser, mockStudentUser])
  })

  test('getAllUsers() throws an http error', async () => {
    mockedHttpClient.mockRejectedValue(new Error('error'))
    usersState = store.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)

    await dispatch(getAllUsers())

    usersState = store.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe('error')
  })

  test('getSingleUser() is called successfully', async () => {
    mockedHttpClient.mockResolvedValue(mockGetSingleUserSuccess)
    usersState = store.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)

    await dispatch(getSingleUser({ id: 1 }))

    usersState = store.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)
    expect(usersState.user).toBe(mockAdminUser)
  })

  test('getSingleUser() throws an http error', async () => {
    mockedHttpClient.mockRejectedValue(new Error('error'))
    usersState = store.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)

    await dispatch(getSingleUser({ id: 1 }))

    usersState = store.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe('error')
  })

  test('createUser() is called successfully', async () => {
    mockedHttpClient.mockResolvedValue(mockCreateUserSuccess)

    const customStore = configureAppStore({
      ...initialRootState,
      users: {
        ...initialRootState.users,
        users: [mockAdminUser],
      },
    })
    const customDispatch: AppDispatch = customStore.dispatch

    usersState = customStore.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)

    await customDispatch(createUser(mockCreateStudentUserPayload))

    usersState = customStore.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)
    expect(usersState.users).toEqual([mockAdminUser, mockCreatedStudentUser])
  })

  test('createUser() is called successfully with a callback', async () => {
    mockedHttpClient.mockResolvedValue(mockCreateUserSuccess)
    usersState = store.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)

    const callback = jest.fn()
    await dispatch(createUser(mockCreateStudentUserPayload, callback))

    expect(callback).toHaveBeenCalled()
  })

  test('createUser() throws an http error', async () => {
    mockedHttpClient.mockRejectedValue(new Error('error'))
    usersState = store.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)

    await dispatch(createUser(mockCreateStudentUserPayload))

    usersState = store.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe('error')
  })

  test('updateUser() is called successfully', async () => {
    mockedHttpClient.mockResolvedValue(mockUpdateUserSuccess)
    const customStore = configureAppStore({
      ...initialRootState,
      users: {
        ...initialRootState.users,
        users: [mockAdminUser, mockTeacherUser, mockStudentUser],
      },
    })
    const customDispatch: AppDispatch = customStore.dispatch

    usersState = customStore.getState().users
    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)

    await customDispatch(updateUser(mockAdminUserUpdatePayload))

    usersState = customStore.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)
    expect(usersState.users).toEqual([
      mockAdminUserUpdated,
      mockTeacherUser,
      mockStudentUser,
    ])
  })

  test('updateUser() is called successfully with a callback', async () => {
    mockedHttpClient.mockResolvedValue(mockUpdateUserSuccess)
    usersState = store.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)

    const callback = jest.fn()
    await dispatch(updateUser(mockAdminUserUpdatePayload, callback))

    expect(callback).toHaveBeenCalled()
  })

  test('updateUser() throws an http error', async () => {
    mockedHttpClient.mockRejectedValue(new Error('error'))
    usersState = store.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)

    await dispatch(updateUser(mockAdminUserUpdatePayload))

    usersState = store.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe('error')
  })

  test('deleteUser() is called successfully', async () => {
    mockedHttpClient.mockResolvedValue(mockDeleteUserSuccess)
    const customStore = configureAppStore({
      ...initialRootState,
      users: {
        ...initialRootState.users,
        users: [mockAdminUser, mockTeacherUser, mockStudentUser],
      },
    })
    const customDispatch: AppDispatch = customStore.dispatch

    usersState = customStore.getState().users
    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)

    await customDispatch(deleteUser(mockDeleteUserPayload))

    usersState = customStore.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)
    expect(usersState.users).toEqual([mockAdminUser, mockTeacherUser])
  })

  test('deleteUser() is called successfully with a callback', async () => {
    mockedHttpClient.mockResolvedValue(mockDeleteUserSuccess)
    usersState = {
      ...store.getState().users,
      users: [mockAdminUser, mockTeacherUser, mockStudentUser],
    }

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)

    const callback = jest.fn()
    await dispatch(deleteUser(mockDeleteUserPayload, callback))

    expect(callback).toHaveBeenCalled()
  })

  test('deleteUser() throws an http error', async () => {
    mockedHttpClient.mockRejectedValue(new Error('error'))
    usersState = store.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe(null)

    await dispatch(deleteUser(mockDeleteUserPayload))

    usersState = store.getState().users

    expect(usersState.loading).toBe(false)
    expect(usersState.error).toBe('error')
  })
})
*/
