import type { Meta } from '@storybook/react-webpack5'
import { createIntegrationStory } from '@webapp/shared'
import { authMswHandlers } from '#msw'
import { authStore } from '#app'
import { Login } from '#ui'

type LoginType = typeof Login

const { login_200_handler } = authMswHandlers

const meta = {
  title: 'Pages/Login',
  component: Login,
  parameters: {
    withRedux: {
      store: authStore,
    },
    withRouter: {
      routePath: '/auth/login',
      initialPath: '/auth/login',
    },
  },
} as Meta<LoginType>

export default meta

const createLoginStory = createIntegrationStory<LoginType>

export const Default = createLoginStory({
  parameters: {
    msw: { handlers: [login_200_handler] },
  },
})
