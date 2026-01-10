import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createComponentStory } from '#testing-utils'
import { ErrorMessage } from '#ui'

const meta = {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
  argTypes: {},
  args: {},
} satisfies Meta<typeof ErrorMessage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createComponentStory<Story>({
  args: {
    children: 'error message',
  },
})
