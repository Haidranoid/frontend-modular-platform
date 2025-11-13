import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createStory } from '@webapp/shared'
import { login_200 } from '#msw-handlers'
import { Login } from './Login'

const meta = {
  title: 'Pages/Login',
  component: Login,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createStory({
  parameters: {
    withMemoryRouter: {
      initialPath: '/auth/login',
    },
    msw: { handlers: [login_200] },
  },
})
