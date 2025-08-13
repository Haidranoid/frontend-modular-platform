import { createBrowserRouter } from 'react-router'
import { Paths } from '@constants'

import { Login, loginLoader } from '@pages/login'
import { Signup, signupLoader } from '@pages/signup'

const router = createBrowserRouter([
  {
    path: Paths.LOGIN,
    Component: Login,
    loader: loginLoader,
  },
  {
    path: Paths.SIGNUP,
    Component: Signup,
    loader: signupLoader,
  },
  {
    path: Paths.HOME,
    lazy: async () => {
      // load component and loader in parallel before rendering
      const [Component, { homeLoader }] = await Promise.all([
        import('@pages/home/Home').then((page) => page.default),
        import('@pages/home/loader'),
      ])
      return { Component, loader: homeLoader }
    },
  },
])

export default router
