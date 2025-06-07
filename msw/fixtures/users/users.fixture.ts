import { User } from '@state/auth/interfaces/authentication.types'
import { UserRoles } from '@constants'
import { StudentDisability } from '@constants'
import { MockAxiosResponse } from '@test/interfaces/index.types'
import {
  CreateUserRequestResponse,
  DeleteUserRequestResponse,
  GetAllUsersRequestResponse,
  GetSingleUserRequestResponse,
  UpdateUserRequestResponse,
} from '@state/users/actions/UsersActions.responses'
import { DeleteUserRequestBody } from '@state/users/actions/UsersActions.payloads'


export const studentUserFixture: User = {
  id: 3,
  email: 'student@hotmail.com',
  password: '',
  firstName: 'Eduardo',
  lastName: 'Martinez',
  role: UserRoles.STUDENT,
  disability: StudentDisability.VISUAL,
}

export const mockCreateStudentUserPayload: User = {
  id: 4,
  email: 'student4@hotmail.com',
  password: '12345678',
  firstName: 'Arturo',
  lastName: 'Carrillo',
  role: UserRoles.STUDENT,
  disability: StudentDisability.HEARING,
}

export const mockCreatedStudentUser: User = {
  id: 4,
  email: 'student4@hotmail.com',
  password: '',
  firstName: 'Arturo',
  lastName: 'Carrillo',
  role: UserRoles.STUDENT,
  disability: StudentDisability.HEARING,
}

export const mockAdminUserUpdated: User = {
  id: 1,
  email: 'admin@hotmail.com',
  password: '',
  firstName: 'Pablo',
  lastName: 'Serrano',
  role: UserRoles.ADMIN,
}

export const mockDeletedUser: DeleteUserRequestResponse = {
  userId: 3,
}

export const mockAdminUserUpdatePayload: User = {
  id: 1,
  email: 'admin@hotmail.com',
  password: '',
  firstName: 'Pablo',
  lastName: 'Serrano',
  role: UserRoles.ADMIN,
}

export const mockDeleteUserPayload: DeleteUserRequestBody = {
  id: 3,
}

export const mockGetAllUsersSuccess: MockAxiosResponse<GetAllUsersRequestResponse> = {
  data: {
    users: [mockAdminUser, mockTeacherUser, mockStudentUser],
  },
}

export const mockGetSingleUserSuccess: MockAxiosResponse<GetSingleUserRequestResponse> = {
  data: {
    user: mockAdminUser,
  },
}

export const mockCreateUserSuccess: MockAxiosResponse<CreateUserRequestResponse> = {
  data: {
    user: mockCreatedStudentUser,
  },
}

export const mockUpdateUserSuccess: MockAxiosResponse<UpdateUserRequestResponse> = {
  data: {
    user: mockAdminUserUpdated,
  },
}

export const mockDeleteUserSuccess: MockAxiosResponse<DeleteUserRequestResponse> = {
  data: mockDeletedUser,
}
