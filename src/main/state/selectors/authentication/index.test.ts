import { selectCurrentUser, selectIsAuthenticated, selectAuthStatus } from './index'
import { mockAdminUser } from '@test/mocks/authentication/authenticationMocks'
import { AppReducerState } from '@reducers/interfaces/app.reducer.types'
import { initialRootState } from '../../store/old'

describe('Authentication Selectors', () => {
  const mockState: AppReducerState = initialRootState

  it('selectCurrentUser should return current user as null', () => {
    expect(selectCurrentUser(mockState)).toEqual(null)
  })

  it('selectCurrentUser should return a current user', () => {
    const stateWithUser = {
      ...mockState,
      auth: { ...mockState.auth, user: mockAdminUser },
    }
    expect(selectCurrentUser(stateWithUser)).toEqual(mockAdminUser)
  })

  it('selectIsAuthenticated should return true when user exists', () => {
    const stateWithUser = {
      ...mockState,
      auth: { ...mockState.auth, user: mockAdminUser },
    }
    expect(selectIsAuthenticated(stateWithUser)).toBe(true)
  })

  it('selectIsAuthenticated should return false when user is null', () => {
    const stateWithoutUser = {
      ...mockState,
      auth: { ...mockState.auth, user: null },
    }
    expect(selectIsAuthenticated(stateWithoutUser)).toBe(false)
  })

  it('selectAuthStatus should return loading and error state', () => {
    expect(selectAuthStatus(mockState)).toEqual({
      loading: false,
      error: null,
    })
  })
})
