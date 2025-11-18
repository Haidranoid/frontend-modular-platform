import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createStory } from '@webapp/shared'
import { fetchUsers_200 } from '#msw-handlers'
import { Home } from './Home'

const meta = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
    withMemoryRouter: {
      initialPath: '/users',
    },
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createStory({
  parameters: {
    msw: { handlers: [fetchUsers_200] },
  },
})
