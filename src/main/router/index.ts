import { createBrowserRouter } from 'react-router'
import { Paths } from '@constants'

import { Login } from '@pages/login'
import { Signup } from '@pages/signup'
import { Home } from '@pages/home'
import AuthLayout from '@layouts/auth/AuthLayout'

const router = createBrowserRouter([
  {
    path: Paths.HOME,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: Paths.AUTH_HOME,
        Component: AuthLayout,
        children: [
          {
            path: Paths.AUTH_LOGIN,
            Component: Login,
          },
          {
            path: Paths.AUTH_SIGNUP,
            Component: Signup,
          },
        ],
      },
    ],
  },
])

export default router
