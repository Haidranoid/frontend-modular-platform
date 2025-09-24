import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { StorybookApp } from '../StorybookApp'

const meta = {
  title: 'App/Auth',
  component: StorybookApp,
  parameters: {
    layout: 'fullscreen',
    disableGlobalDecorators: true,
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof StorybookApp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
