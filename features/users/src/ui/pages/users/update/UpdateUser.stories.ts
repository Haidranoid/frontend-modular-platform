import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createStory } from '@webapp/shared'
import { createUser_200 } from '#msw-handlers'
import { UpdateUser } from './UpdateUser'

const meta = {
  title: 'Pages/UpdateUser',
  component: UpdateUser,
  parameters: {
    parameters: {
      layout: 'fullscreen',
      withMemoryRouter: {
        initialPath: '/users/create',
      },
    },
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof UpdateUser>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createStory({
  parameters: {
    msw: { handlers: [createUser_200] },
  },
})
