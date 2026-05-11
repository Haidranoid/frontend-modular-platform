import type { Meta } from '@storybook/react-webpack5'
import { createAppStory } from '@webapp/shared'
import { authMswHandlers } from '#msw'
import { App } from '#app'

type AuthAppType = typeof App

const { login_200_handler, signup_200_handler } = authMswHandlers

const meta = {
  title: 'App/Auth',
  component: App,
  parameters: {},
} as Meta<AuthAppType>

export default meta

const createAuthAppStory = createAppStory<AuthAppType>

export const Default = createAuthAppStory({
  parameters: {
    msw: {
      handlers: [login_200_handler, signup_200_handler],
    },
  },
})
