import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { fn } from 'storybook/test'
import { Input } from '../Input'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    placeholder: 'input placeholder',
    onChange: fn(),
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    $size: 'small',
  },
}

export const Secondary: Story = {
  args: {
    $primary: false,
    $size: 'small',
  },
}

export const Small: Story = {
  args: {
    $size: 'small',
  },
}

export const Medium: Story = {
  args: {
    $size: 'medium',
  },
}

export const Large: Story = {
  args: {
    $size: 'large',
  },
}
