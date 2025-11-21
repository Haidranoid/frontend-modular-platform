import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createStory } from '@webapp/shared'
import { signup_200_handler } from '#msw-handlers'
import { Signup } from './Signup'

const meta = {
  title: 'Pages/Signup',
  component: Signup,
  parameters: {
    layout: 'fullscreen',
    withRouter: {
      initialPath: '/auth/signup',
      routeId: 'authSignup',
    },
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Signup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createStory({
  parameters: {
    msw: { handlers: [signup_200_handler] },
  },
})
