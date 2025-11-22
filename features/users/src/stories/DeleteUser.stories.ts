import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createStory } from '@webapp/shared'
import { deleteUser_200_handler, fetchUserById_200_handler } from '#msw-mocks'
import { DeleteUser } from '#ui'

const meta = {
  title: 'Pages/DeleteUser',
  component: DeleteUser,
  parameters: {
    layout: 'fullscreen',
    withRouter: {
      initialPath: '/users/1234567890/delete',
      routeId: 'usersDelete',
    },
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof DeleteUser>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createStory({
  parameters: {
    msw: {
      handlers: [deleteUser_200_handler, fetchUserById_200_handler],
    },
  },
})
