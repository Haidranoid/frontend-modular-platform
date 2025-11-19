import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createAppStory } from '@webapp/shared'
import { fetchUsers_200_handler } from '#msw-handlers'
import { App } from './App'

const meta = {
  title: 'App/Users',
  component: App,
  parameters: {
    layout: 'fullscreen',
    withInitialPath: {
      initialPath: '/users',
    },
    msw: {
      handlers: [fetchUsers_200_handler],
    },
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createAppStory({})
