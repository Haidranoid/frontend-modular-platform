import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createAppStory } from '@webapp/shared'
import { me_200_handler, login_200_handler, signup_200_handler } from '#msw-mocks'
import { App } from '#app'

const meta = {
  title: 'App/Auth',
  component: App,
  parameters: {
    layout: 'fullscreen',
    withInitialPath: {
      initialPath: '/auth',
    },
    msw: {
      handlers: [me_200_handler, login_200_handler, signup_200_handler],
    },
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createAppStory({})
