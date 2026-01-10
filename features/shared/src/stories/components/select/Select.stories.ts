import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createComponentStory } from '#testing-utils'
import { Select } from '#ui'

const meta = {
  title: 'Components/Select',
  component: Select,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createComponentStory<Story>({
  args: {
    label: 'Select',
    options: [
      { value: 'value1', displayValue: 'displayValue1' },
      { value: 'value2', displayValue: 'displayValue2' },
    ],
  },
})
