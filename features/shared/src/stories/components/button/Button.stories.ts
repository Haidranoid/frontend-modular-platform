import type { Meta } from '@storybook/react-webpack5'
import { createComponentStory } from '#testing-utils'
import { Button } from '#ui/components/button'

type ButtonType = typeof Button
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
  args: {
    //placeholder: 'placeholder',
    //onClick: fn(),
    //onChange: fn(),
    label: 'Submit',
  },
} as Meta<ButtonType>

export default meta
//type Story = StoryObj<typeof meta>

const createButtonStory = createComponentStory<ButtonType>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default = createButtonStory({
  args: {},
})

export const Dark_Default = createButtonStory({
  args: {},
  parameters: {
    withTheme: {
      initialTheme: 'dark',
    },
  },
})

export const Dark_Primary = createButtonStory({
  args: {
    $variant: 'primary',
  },
  parameters: {
    withTheme: {
      initialTheme: 'dark',
    },
  },
})

export const Dark_Secondary = createButtonStory({
  args: {
    $variant: 'secondary',
  },
  parameters: {
    withTheme: {
      initialTheme: 'dark',
    },
  },
})

export const Light_Default = createButtonStory({
  args: {},
  parameters: {
    withTheme: {
      initialTheme: 'light',
    },
  },
})

export const Light_Primary = createButtonStory({
  args: {
    $variant: 'primary',
  },
  parameters: {
    withTheme: {
      initialTheme: 'light',
    },
  },
})

export const Light_Secondary = createButtonStory({
  args: {
    $variant: 'secondary',
  },
  parameters: {
    withTheme: {
      initialTheme: 'light',
    },
  },
})

export const Size_Small = createButtonStory({
  args: {
    $size: 'small',
  },
})

export const Size_Medium = createButtonStory({
  args: {
    $size: 'medium',
  },
})

export const Size_Large = createButtonStory({
  args: {
    $size: 'large',
  },
})
