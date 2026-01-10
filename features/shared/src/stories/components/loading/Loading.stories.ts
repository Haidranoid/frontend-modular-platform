import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createComponentStory } from '#testing-utils'
import { Loading } from '#ui'

const meta = {
  title: 'Components/Loading',
  component: Loading,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Loading>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = createComponentStory<Story>({
  args: {
    color: 'primary',
  },
})

export const Secondary: Story = createComponentStory<Story>({
  args: {
    color: 'secondary',
  },
})
