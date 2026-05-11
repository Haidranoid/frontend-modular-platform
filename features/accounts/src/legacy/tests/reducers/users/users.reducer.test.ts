import usersReducer, { initialUsersReducerState } from './users.reducer'
import UserTypes from '@actions/users/UsersActionsTypes'
import {
  mockAdminUser,
  mockTeacherUser,
  mockStudentUser,
  mockCreateStudentUserPayload,
  mockAdminUserUpdatePayload,
} from '@test/mocks/users/usersMocks'

describe('usersReducer', () => {
  it('should return the initial state if action is unknown', () => {
    const newState = usersReducer(undefined, {} as never)
    expect(newState).toEqual(initialUsersReducerState)
  })

  describe('ALL_USERS actions', () => {
    it('should handle GET_ALL_USERS_STARTED', () => {
      const newState = usersReducer(initialUsersReducerState, {
        type: UserTypes.GET_ALL_USERS_STARTED,
      })
      expect(newState).toEqual({
        ...initialUsersReducerState,
        loading: true,
        error: null,
      })
    })

    it('should handle GET_ALL_USERS_SUCCESS', () => {
      const users = [mockAdminUser, mockTeacherUser, mockStudentUser]
      const newState = usersReducer(initialUsersReducerState, {
        type: UserTypes.GET_ALL_USERS_SUCCESS,
        payload: {
          users,
        },
      })
      expect(newState).toEqual({
        ...initialUsersReducerState,
        users,
        loading: false,
        error: null,
      })
    })

    it('should handle GET_ALL_USERS_ERROR', () => {
      const error = 'Failed to get users'
      const newState = usersReducer(initialUsersReducerState, {
        type: UserTypes.GET_ALL_USERS_ERROR,
        payload: error,
      })
      expect(newState).toEqual({ ...initialUsersReducerState, loading: false, error })
    })
  })

  describe('SINGLE_USER actions', () => {
    it('should handle GET_SINGLE_USER_STARTED', () => {
      const newState = usersReducer(initialUsersReducerState, {
        type: UserTypes.GET_SINGLE_USER_STARTED,
      })
      expect(newState).toEqual({
        ...initialUsersReducerState,
        loading: true,
        error: null,
      })
    })

    it('should handle GET_SINGLE_USER_SUCCESS', () => {
      const user = mockStudentUser
      const newState = usersReducer(initialUsersReducerState, {
        type: UserTypes.GET_SINGLE_USER_SUCCESS,
        payload: {
          user,
        },
      })
      expect(newState).toEqual({
        ...initialUsersReducerState,
        user,
        loading: false,
        error: null,
      })
    })

    it('should handle GET_SINGLE_USER_ERROR', () => {
      const error = 'Failed to get users by resource name'
      const newState = usersReducer(initialUsersReducerState, {
        type: UserTypes.GET_SINGLE_USER_ERROR,
        payload: error,
      })
      expect(newState).toEqual({ ...initialUsersReducerState, loading: false, error })
    })
  })

  describe('CREATE_USER actions', () => {
    it('should handle CREATE_USER_STARTED', () => {
      const newState = usersReducer(initialUsersReducerState, {
        type: UserTypes.CREATE_USER_STARTED,
      })
      expect(newState).toEqual({
        ...initialUsersReducerState,
        loading: true,
        error: null,
      })
    })

    it('should handle CREATE_USER_SUCCESS', () => {
      const users = [mockAdminUser, mockTeacherUser, mockStudentUser]
      const newInitialUsersReducerState = { ...initialUsersReducerState, users }
      const newState = usersReducer(newInitialUsersReducerState, {
        type: UserTypes.CREATE_USER_SUCCESS,
        payload: {
          user: mockCreateStudentUserPayload,
        },
      })
      expect(newState).toEqual({
        ...initialUsersReducerState,
        users: [...users, mockCreateStudentUserPayload],
        loading: false,
        error: null,
      })
    })

    it('should handle CREATE_USER_ERROR', () => {
      const error = 'Failed to create user'
      const newState = usersReducer(initialUsersReducerState, {
        type: UserTypes.CREATE_USER_ERROR,
        payload: error,
      })
      expect(newState).toEqual({ ...initialUsersReducerState, loading: false, error })
    })
  })

  describe('UPDATE_USER actions', () => {
    it('should handle UPDATE_USER_STARTED', () => {
      const newState = usersReducer(initialUsersReducerState, {
        type: UserTypes.UPDATE_USER_STARTED,
      })
      expect(newState).toEqual({
        ...initialUsersReducerState,
        loading: true,
        error: null,
      })
    })

    it('should handle UPDATE_USER_SUCCESS', () => {
      const users = [mockAdminUser, mockTeacherUser, mockStudentUser]
      const newInitialUsersReducerState = { ...initialUsersReducerState, users }

      const newState = usersReducer(newInitialUsersReducerState, {
        type: UserTypes.UPDATE_USER_SUCCESS,
        payload: {
          user: mockAdminUserUpdatePayload,
        },
      })

      expect(newState.users).toHaveLength(3)
      expect(newState.users[0]).toEqual(mockAdminUserUpdatePayload)
    })

    it('should handle UPDATE_USER_ERROR', () => {
      const error = 'Failed to update user'
      const newState = usersReducer(initialUsersReducerState, {
        type: UserTypes.UPDATE_USER_ERROR,
        payload: error,
      })
      expect(newState).toEqual({ ...initialUsersReducerState, loading: false, error })
    })
  })

  describe('DELETE_USER actions', () => {
    it('should handle DELETE_USER_STARTED', () => {
      const newState = usersReducer(initialUsersReducerState, {
        type: UserTypes.DELETE_USER_STARTED,
      })
      expect(newState).toEqual({
        ...initialUsersReducerState,
        loading: true,
        error: null,
      })
    })

    it('should handle DELETE_USER_SUCCESS', () => {
      const users = [mockAdminUser, mockTeacherUser, mockStudentUser]
      const customInitialUsersReducerState = { ...initialUsersReducerState, users }

      const newState = usersReducer(customInitialUsersReducerState, {
        type: UserTypes.DELETE_USER_SUCCESS,
        payload: {
          userId: 2,
        },
      })

      const usersExpected = [mockAdminUser, mockStudentUser]
      expect(newState.users).toHaveLength(2)
      expect(newState.users).toEqual(usersExpected)
    })

    it('should handle DELETE_USER_ERROR', () => {
      const error = 'Failed to delete user'
      const newState = usersReducer(initialUsersReducerState, {
        type: UserTypes.DELETE_USER_ERROR,
        payload: error,
      })
      expect(newState).toEqual({ ...initialUsersReducerState, loading: false, error })
    })
  })
})
