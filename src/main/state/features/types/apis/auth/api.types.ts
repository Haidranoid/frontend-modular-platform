import { Api } from '@features/types/apis'
import { LoginPayload } from './payloads.types'
import { GetMeSuccess, LoginSuccess } from './responses.types'

export interface AuthApi extends Api {
  me: () => Promise<GetMeSuccess>
  login: (credentials: LoginPayload) => Promise<LoginSuccess>
  logout: () => Promise<void>
}
