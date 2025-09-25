import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Loading } from '../Loading'

const meta = {
  title: 'UI/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Loading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'primary',
  },
}
