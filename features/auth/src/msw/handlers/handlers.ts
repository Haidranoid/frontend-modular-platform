import * as loginHandlers from './login.handlers'
import * as meHandlers from './me.handlers'
import * as signupHandlers from './signup.handlers'

const handlers = {
  ...loginHandlers,
  ...meHandlers,
  ...signupHandlers,
}

export { handlers as authMswHandlers }
