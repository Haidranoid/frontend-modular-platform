import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createStory } from '@webapp/shared'
import { createUser_200_handler } from '#msw-handlers'
import { CreateUser } from '#ui'

const meta = {
  title: 'Pages/CreateUser',
  component: CreateUser,
  parameters: {
    layout: 'fullscreen',
    withRouter: {
      initialPath: '/users/create',
      routeId: 'usersCreate',
    },
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof CreateUser>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createStory({
  parameters: {
    msw: { handlers: [createUser_200_handler] },
  },
})
