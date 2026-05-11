import httpClient from '@lib/http-client/httpClient'
import { legacy_configureStore as configureStore } from 'redux-mock-store'
import store from '@store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import { me, login } from './authenticationAC'
import AuthenticationTypes from '@actions/authentication/AuthenticationActionsTypes'
import {
  mockAdminUser,
  mockLoginSuccess,
} from '@test/mocks/authentication/authenticationMocks'
import { AuthenticationReducerState } from '@reducers/authentication/authentication.reducer.types'
import { initialAuthState } from '@reducers/authentication/authentication.reducer'
import { AppDispatch } from '@store/index.types'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const mockedHttpClient = httpClient as jest.Mock

jest.mock('@lib/http-client/httpClient', () => ({
  __esModule: true,
  default: jest.fn(),
}))

describe('mockStore', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it.skip('secretWord is returned', () => {
    // Initialize mockstore with empty state
    const store = mockStore({})

    // Return the promise
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return store.dispatch(me()).then(() => {
      const actions = store.getActions()

      expect(actions[0]).toEqual('')
    })
  })
})

describe('authenticationAC', () => {
  // Get fresh state
  let authState: AuthenticationReducerState = initialAuthState
  const dispatch: AppDispatch = store.dispatch

  beforeEach(() => {
    dispatch({ type: AuthenticationTypes.LOGOUT_SUCCESS })
    mockedHttpClient.mockResolvedValue(mockLoginSuccess)
  })

  test('login() is called', async () => {
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
})
