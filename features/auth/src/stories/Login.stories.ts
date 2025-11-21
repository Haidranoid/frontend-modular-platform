import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createStory } from '@webapp/shared'
import { login_200_handler } from '#msw-handlers'
import { Login } from '#ui'

const meta = {
  title: 'Pages/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen',
    withRouter: {
      initialPath: '/auth/login',
      routeId: 'authLogin',
    },
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createStory({
  parameters: {
    msw: { handlers: [login_200_handler] },
  },
})
