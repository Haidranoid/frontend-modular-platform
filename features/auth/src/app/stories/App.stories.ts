import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { App } from '../App'

const meta = {
  title: 'App/Auth',
  component: App,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    disableGlobalDecorators: true,
  },
}
