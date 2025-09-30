import type { User, ApiOperations } from "@webapp/shared";
import type {
  LoginPayload,
  SignupPayload,
  LoginSuccess,
  SignupSuccess,
  GetMeSuccess,
} from './request-types'

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

export interface AuthOps extends ApiOperations {
  me: () => Promise<GetMeSuccess>
  login: (credentials: LoginPayload) => Promise<LoginSuccess>
  signup: (credentials: SignupPayload) => Promise<SignupSuccess>
  logout: () => Promise<void>
}