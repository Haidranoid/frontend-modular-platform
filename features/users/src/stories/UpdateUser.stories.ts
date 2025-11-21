import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createStory } from '@webapp/shared'
import { updateUser_200_handler, fetchUserById_200_handler } from '#msw-handlers'
import { UpdateUser } from '#ui'

const meta = {
  title: 'Pages/UpdateUser',
  component: UpdateUser,
  parameters: {
    layout: 'fullscreen',
    withRouter: {
      initialPath: '/users/1234567890/update',
      routeId: 'usersUpdate',
    },
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof UpdateUser>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createStory({
  parameters: {
    msw: {
      handlers: [updateUser_200_handler, fetchUserById_200_handler],
    },
  },
})
