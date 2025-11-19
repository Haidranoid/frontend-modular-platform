import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createStory } from '@webapp/shared'
import { updateUser_200_handler } from '#msw-handlers'
import { UpdateUser } from './UpdateUser'

const meta = {
  title: 'Pages/UpdateUser',
  component: UpdateUser,
  parameters: {
    layout: 'fullscreen',
    withMemoryRouter: {
      initialPath: '/users/update',
    },
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof UpdateUser>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createStory({
  parameters: {
    msw: { handlers: [updateUser_200_handler] },
  },
})
