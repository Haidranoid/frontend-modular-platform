import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { ErrorMessage } from './ErrorMessage'

const meta = {
  title: 'UI/Error',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ErrorMessage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'error message',
  },
}
