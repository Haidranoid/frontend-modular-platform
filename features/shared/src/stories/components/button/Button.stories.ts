import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createComponentStory } from '#testing-utils'
import { Button } from '#ui'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  decorators: [],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    //layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = createComponentStory<Story>({
  args: {
    label: 'Primary',
  },
  parameters: {
    withTheme: {},
  },
})

export const TEST: Story = {
  args: {
    label: 'TEST',
  },
  parameters: {},
}

export const Secondary: Story = createComponentStory<Story>({
  args: {
    $primary: false,
    label: 'Secondary',
  },
})

export const Small: Story = createComponentStory<Story>({
  args: {
    $primary: false,
    $size: 'small',
    label: 'Button',
  },
})

export const Medium: Story = createComponentStory<Story>({
  args: {
    $size: 'medium',
    label: 'Button',
  },
})

export const Large: Story = createComponentStory<Story>({
  args: {
    $size: 'large',
    label: 'Button',
  },
})
