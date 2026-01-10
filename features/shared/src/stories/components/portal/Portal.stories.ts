import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createComponentStory } from '#testing-utils'
import { Portal } from '#ui'

const meta = {
  title: 'Components/Portal',
  component: Portal,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Portal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createComponentStory<Story>({
  args: {
    children: 'portal test',
    container: document.body,
  },
})
