import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createComponentStory } from '#testing-utils'
import { Dialog } from '#ui'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createComponentStory<Story>({})
