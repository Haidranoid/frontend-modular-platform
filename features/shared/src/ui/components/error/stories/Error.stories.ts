import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Error } from '../Error'

const meta = {
  title: 'UI/Error',
  component: Error,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Error>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'error message',
  },
}
