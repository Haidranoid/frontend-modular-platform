import rootReducer, { initialRootState } from './root.reducer'
import AuthenticationTypes from '../actions/authentication/AuthenticationActionsTypes'
import { AppReducerState } from './app/app.reducer.types'
import { mockSingleContentOne } from '@test/mocks/content/contentMocks'
import {
  mockTopicBasic,
  mockTopicIntermediate,
  mockTopicAdvanced,
} from '@test/mocks/topics/topicsMocks'
import {
  mockAdminUser,
  mockTeacherUser,
  mockStudentUser,
} from '@test/mocks/users/usersMocks'

describe('rootReducer', () => {
  describe('when LOGOUT action is dispatched', () => {
    const customInitialRootState: AppReducerState = {
      global: {
        loading: false,
        error: 'Something went wrong',
      },
      auth: {
        user: mockAdminUser,
        loading: false,
        error: null,
      },
      users: {
        users: [mockAdminUser, mockTeacherUser, mockStudentUser],
        user: mockStudentUser,
        loading: true,
        error: null,
      },
      content: {
        resource: mockSingleContentOne,
        loading: false,
        error: 'Something went wrong',
      },
      topics: {
        topics: [mockTopicBasic, mockTopicIntermediate, mockTopicAdvanced],
        resources: [mockSingleContentOne],
        loading: false,
        error: null,
      },
    }

    it('should return the initial state if action is unknown', () => {
      const newState = rootReducer(customInitialRootState, {} as never)
      expect(newState).toEqual({ ...customInitialRootState })
    })

    it('should reset to initial state all the reducers', () => {
      const newState = rootReducer(customInitialRootState, {
        type: AuthenticationTypes.LOGOUT_SUCCESS,
      })
      expect(newState).toEqual({ ...initialRootState })
    })
  })
})
