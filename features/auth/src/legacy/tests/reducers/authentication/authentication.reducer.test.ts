import authenticationReducer, { initialAuthState } from './authentication.reducer'
import AuthenticationTypes from '@actions/authentication/AuthenticationActionsTypes'
import { AuthenticationReducerState } from './authentication.reducer.types'
import { mockAdminUser } from '@test/mocks/authentication/authenticationMocks'

describe('authenticationReducer', () => {
  it('should return the initial state if action is unknown', () => {
    const newState = authenticationReducer(undefined, {} as never)
    expect(newState).toEqual(initialAuthState)
  })

  describe('ME actions', () => {
    it('should handle GET_ME_DATA_STARTED', () => {
      const newState = authenticationReducer(initialAuthState, {
        type: AuthenticationTypes.GET_ME_DATA_STARTED,
      })
      expect(newState).toEqual({ ...initialAuthState, loading: true, error: null })
    })

    it('should handle GET_ME_DATA_SUCCESS', () => {
      const newState = authenticationReducer(initialAuthState, {
        type: AuthenticationTypes.GET_ME_DATA_SUCCESS,
        payload: { user: mockAdminUser },
      })
      expect(newState).toEqual({
        ...initialAuthState,
        user: mockAdminUser,
        loading: false,
        error: null,
      })
    })

    it('should handle GET_ME_DATA_ERROR', () => {
      const error = 'Failed to fetch user'
      const newState = authenticationReducer(initialAuthState, {
        type: AuthenticationTypes.GET_ME_DATA_ERROR,
        payload: error,
      })
      expect(newState).toEqual({ ...initialAuthState, loading: false, error })
    })
  })

  describe('LOGIN actions', () => {
    it('should handle LOGIN_STARTED', () => {
      const newState = authenticationReducer(initialAuthState, {
        type: AuthenticationTypes.LOGIN_STARTED,
      })
      expect(newState).toEqual({ ...initialAuthState, loading: true, error: null })
    })

    it('should handle LOGIN_SUCCESS', () => {
      const newState = authenticationReducer(initialAuthState, {
        type: AuthenticationTypes.LOGIN_SUCCESS,
        payload: {
          accessToken: 'accessToken',
          refreshToken: 'refreshToken',
          user: mockAdminUser,
        },
      })
      expect(newState).toEqual({
        ...initialAuthState,
        user: mockAdminUser,
        loading: false,
        error: null,
      })
    })

    it('should handle LOGIN_ERROR', () => {
      const error = 'Invalid credentials'
      const newState = authenticationReducer(initialAuthState, {
        type: AuthenticationTypes.LOGIN_ERROR,
        payload: error,
      })
      expect(newState).toEqual({ ...initialAuthState, loading: false, error })
    })
  })

  describe('LOGOUT actions', () => {
    it('should handle LOGOUT_STARTED', () => {
      const newState = authenticationReducer(initialAuthState, {
        type: AuthenticationTypes.LOGOUT_STARTED,
      })
      expect(newState).toEqual({ ...initialAuthState, loading: true, error: null })
    })

    it('should handle LOGOUT_SUCCESS', () => {
      const stateWithUser: AuthenticationReducerState = {
        user: mockAdminUser,
        loading: true,
        error: null,
      }
      const newState = authenticationReducer(stateWithUser, {
        type: AuthenticationTypes.LOGOUT_SUCCESS,
      })
      expect(newState).toEqual({ ...initialAuthState })
    })

    it('should handle LOGOUT_ERROR', () => {
      const error = 'Logout failed'
      const newState = authenticationReducer(initialAuthState, {
        type: AuthenticationTypes.LOGOUT_ERROR,
        payload: error,
      })
      expect(newState).toEqual({ ...initialAuthState, loading: false, error })
    })
  })
})
