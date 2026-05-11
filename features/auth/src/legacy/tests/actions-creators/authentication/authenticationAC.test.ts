jest.mock('@lib/http-client/httpClient', () => ({
  __esModule: true,
  default: jest.fn(),
}))

import store from '@store'
import httpClient from '@lib/http-client/httpClient'
import { me, login, logout } from './authenticationAC'
import AuthenticationTypes from '@actions/authentication/AuthenticationActionsTypes'
import {
  mockAdminUser,
  mockGetMeSuccess,
  mockLoginSuccess,
} from '@test/mocks/authentication/authenticationMocks'
import { AuthenticationReducerState } from '@reducers/authentication/authentication.reducer.types'
import { initialAuthState } from '@reducers/authentication/authentication.reducer'
import { AppDispatch } from '@store/index.types'

describe('authenticationAC', () => {
  // Get fresh state
  let authState: AuthenticationReducerState = initialAuthState
  const mockedHttpClient = httpClient as jest.Mock
  const dispatch: AppDispatch = store.dispatch

  beforeEach(() => {
    dispatch({ type: AuthenticationTypes.LOGOUT_SUCCESS })
    mockedHttpClient.mockClear()
  })

  test('me() is called successfully', async () => {
    mockedHttpClient.mockResolvedValue(mockGetMeSuccess)
    authState = store.getState().auth

    expect(authState.loading).toBe(false)
    expect(authState.error).toBe(null)

    await dispatch(me())

    authState = store.getState().auth

    expect(authState.loading).toBe(false)
    expect(authState.error).toBe(null)
    expect(authState.user).toBe(mockAdminUser)
  })

  test('me() is called successfully with a callback', async () => {
    mockedHttpClient.mockResolvedValue(mockGetMeSuccess)
    authState = store.getState().auth

    expect(authState.loading).toBe(false)
    expect(authState.error).toBe(null)

    const callback = jest.fn()
    await dispatch(me(undefined, callback))

    expect(callback).toHaveBeenCalled()
  })

  test('me() throws an http error', async () => {
    mockedHttpClient.mockRejectedValue(new Error('error'))
    authState = store.getState().auth

    expect(authState.loading).toBe(false)
    expect(authState.error).toBe(null)

    await dispatch(me())

    authState = store.getState().auth

    expect(authState.loading).toBe(false)
    expect(authState.error).toBe('error')
  })

  test('login() is called successfully', async () => {
    mockedHttpClient.mockResolvedValue(mockLoginSuccess)
    authState = store.getState().auth

    expect(authState.loading).toBe(false)
    expect(authState.error).toBe(null)

    await dispatch(login({ email: 'admin@hotmail.com', password: '12345678' }))

    // Get updated state after dispatch
    authState = store.getState().auth

    expect(authState.loading).toBe(false)
    expect(authState.error).toBe(null)
    expect(authState.user).toBe(mockAdminUser)
  })

  test('login() is called successfully with a callback', async () => {
    mockedHttpClient.mockResolvedValue(mockLoginSuccess)
    authState = store.getState().auth

    expect(authState.loading).toBe(false)
    expect(authState.error).toBe(null)

    const callback = jest.fn()
    await dispatch(login({ email: 'admin@hotmail.com', password: '12345678' }, callback))

    expect(callback).toHaveBeenCalled()
  })

  test('login() throws an http error', async () => {
    mockedHttpClient.mockRejectedValue(new Error('error'))
    authState = store.getState().auth

    expect(authState.loading).toBe(false)
    expect(authState.error).toBe(null)

    await dispatch(login({ email: 'admin@hotmail.com', password: '12345678' }))

    authState = store.getState().auth

    expect(authState.loading).toBe(false)
    expect(authState.error).toBe('error')
  })

  test('logout() is called successfully', async () => {
    mockedHttpClient.mockResolvedValue(undefined)
    authState = store.getState().auth

    expect(authState.loading).toBe(false)
    expect(authState.error).toBe(null)

    await dispatch(logout())

    // Get updated state after dispatch
    authState = store.getState().auth

    expect(authState.loading).toBe(false)
    expect(authState.error).toBe(null)
  })

  test('logout() is called successfully with a callback', async () => {
    mockedHttpClient.mockResolvedValue(undefined)
    authState = store.getState().auth

    expect(authState.loading).toBe(false)
    expect(authState.error).toBe(null)

    const callback = jest.fn()
    await dispatch(logout(undefined, callback))

    expect(callback).toHaveBeenCalled()
  })

  test('logout() throws an http error', async () => {
    mockedHttpClient.mockRejectedValue(new Error('error'))
    authState = store.getState().auth

    expect(authState.loading).toBe(false)
    expect(authState.error).toBe(null)

    await dispatch(logout())

    authState = store.getState().auth

    expect(authState.loading).toBe(false)
    expect(authState.error).toBe('error')
  })
})
