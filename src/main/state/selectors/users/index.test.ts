import { selectAllUsers, selectSingleUser, selectUsersStatus } from './index'
import {
  mockAdminUser,
  mockTeacherUser,
  mockStudentUser,
} from '@test/mocks/users/usersMocks'
import { AppReducerState } from '@reducers/interfaces/app.reducer.types'
import { initialRootState } from '@store'

describe('Users Selectors', () => {
  const mockState: AppReducerState = initialRootState

  it('selectAllUsers should return users as empty array', () => {
    expect(selectAllUsers(mockState)).toEqual([])
  })

  it('selectAllUsers should return an array of users', () => {
    const usersMocked = [mockAdminUser, mockTeacherUser, mockStudentUser]
    const stateWithUsers: AppReducerState = {
      ...mockState,
      users: { ...mockState.users, users: usersMocked },
    }
    expect(selectAllUsers(stateWithUsers)).toEqual(usersMocked)
  })

  it('selectSingleUser should return user as null', () => {
    expect(selectSingleUser(mockState)).toEqual(null)
  })

  it('selectSingleUser should return an user', () => {
    const userMocked = mockStudentUser
    const stateWithTopics: AppReducerState = {
      ...mockState,
      users: { ...mockState.users, user: userMocked },
    }
    expect(selectSingleUser(stateWithTopics)).toEqual(userMocked)
  })

  it('selectUsersStatus should return loading and error state', () => {
    expect(selectUsersStatus(mockState)).toEqual({
      loading: false,
      error: null,
    })
  })
})
