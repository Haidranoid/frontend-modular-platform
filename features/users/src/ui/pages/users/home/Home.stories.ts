import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createStory } from '@webapp/shared'
import { fetchUsers_200_handler } from '#msw-handlers'
import { Home } from './Home'

const meta = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
    withRouter: {
      initialPath: '/users',
      routeId: 'usersHome',
    },
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createStory({
  parameters: {
    msw: { handlers: [fetchUsers_200_handler] },
  },
})
