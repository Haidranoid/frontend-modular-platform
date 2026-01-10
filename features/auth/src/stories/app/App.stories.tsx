import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createAppStory } from '@webapp/shared'
import { login_200_handler, signup_200_handler } from '#msw-handlers'
import { App } from '#app'

const meta = {
  title: 'App/Auth',
  component: App,
  parameters: {
    msw: {
      handlers: [login_200_handler, signup_200_handler],
    },
  },
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createAppStory<Story>({
  parameters: {
    initialPath: '/auth',
  },
})
