import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Signup } from '../Signup'

const meta = {
  title: 'Pages/Signup',
  component: Signup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Signup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
