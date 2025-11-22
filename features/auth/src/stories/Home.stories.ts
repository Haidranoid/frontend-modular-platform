import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createStory } from '@webapp/shared'
import { Home } from '#ui'

const meta = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
    withRouter: {
      initialPath: '/auth',
      routeId: 'authHome',
    },
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createStory({})
