import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createStory } from '@webapp/shared'
import { createUser_200_handler } from '#msw-handlers'
import { DeleteUser } from './DeleteUser'

const meta = {
  title: 'Pages/DeleteUser',
  component: DeleteUser,
  parameters: {
    layout: 'fullscreen',
    withMemoryRouter: {
      initialPath: '/users/delete',
    },
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof DeleteUser>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createStory({
  parameters: {
    msw: { handlers: [createUser_200_handler] },
  },
})
