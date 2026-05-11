import * as loginFixtures from './login.fixture'
import * as meFixtures from './me.fixture'
import * as signupFixtures from './signup.fixture'

const fixtures = {
  ...loginFixtures,
  ...meFixtures,
  ...signupFixtures,
}

export { fixtures as authMswFixtures }
