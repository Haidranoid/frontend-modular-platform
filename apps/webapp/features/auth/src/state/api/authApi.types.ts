import { Api } from '@webapp/shared/types'
import { LoginPayload, SignupPayload } from './payloads.types'
import { GetMeSuccess, LoginSuccess, SignupSuccess } from './responses.types'

export interface AuthApi extends Api {
  me: () => Promise<GetMeSuccess>
  login: (credentials: LoginPayload) => Promise<LoginSuccess>
  signup: (credentials: SignupPayload) => Promise<SignupSuccess>
  logout: () => Promise<void>
}
