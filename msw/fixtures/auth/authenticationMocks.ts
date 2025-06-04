import { User } from '@state/auth/interfaces/authentication.types'
import { UserRoles } from '@constants'
import { MockAxiosResponse } from '@test/interfaces/index.types'
import {
  GetMeDataRequestResponse,
  LoginRequestResponse,
} from '@state/auth/actions/AuthenticationActions.responses'

export const mockAdminUser: User = {
  id: 1,
  email: 'admin@hotmail.com',
  password: '',
  firstName: 'Nelly',
  lastName: 'Santollo',
  role: UserRoles.ADMIN,
}

export const mockGetMeSuccess: MockAxiosResponse<GetMeDataRequestResponse> = {
  data: {
    user: mockAdminUser,
  },
}

export const mockLoginSuccess: MockAxiosResponse<LoginRequestResponse> = {
  data: {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    user: mockAdminUser,
  },
}
