import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { StorybookContextBox } from '../StorybookContextBox'

const meta = {
  title: 'UI/StorybookContextBox',
  component: StorybookContextBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof StorybookContextBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'App Context',
    items: [],
    config: {
      location: {
        x: 0,
        y: 200,
      },
      size: {
        width: 300,
        height: 500,
      },
    },
    domElement: document.getElementsByTagName('body')[0],
  },
}
