import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Portal } from '../Portal'

const meta = {
  title: 'UI/Portal',
  component: Portal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Portal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'children content',
    container: document.body,
  },
}
