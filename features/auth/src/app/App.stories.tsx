import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createAppStory } from '@webapp/shared'
import { App } from './App'

const meta = {
  title: 'App/Auth',
  component: App,
  parameters: {
    layout: 'fullscreen',
    withInitialPath: {
      initialPath: '/auth'
    }
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createAppStory({})

