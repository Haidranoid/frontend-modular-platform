import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Login } from './Login'

const meta = {
  title: 'Pages/Login',
  component: Login,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
