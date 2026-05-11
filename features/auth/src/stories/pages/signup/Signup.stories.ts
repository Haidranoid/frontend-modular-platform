import type { Meta } from '@storybook/react-webpack5'
import { createIntegrationStory } from '@webapp/shared'
import { authMswHandlers } from '#msw'
import { authStore } from '#app'
import { Signup } from '#ui'

type SignupType = typeof Signup

const { signup_200_handler } = authMswHandlers

const meta = {
  title: 'Pages/Signup',
  component: Signup,
  parameters: {
    withRedux: {
      store: authStore,
    },
    withRouter: {
      routePath: '/auth/signup',
      initialPath: '/auth/signup',
    },
  },
} as Meta<SignupType>

export default meta

const createSignupStory = createIntegrationStory<SignupType>

export const Default = createSignupStory({
  parameters: {
    msw: { handlers: [signup_200_handler] },
  },
})
