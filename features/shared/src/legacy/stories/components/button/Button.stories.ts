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
  },
} as Meta<ButtonType>

export default meta
//type Story = StoryObj<typeof meta>

const createButtonStory = createComponentStory<ButtonType>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
/*const Base: Story = {
  args: {
    label: 'Base',
  },
}
*/

const Variant_Default = createButtonStory({
  args: {
    label: 'Default',
  },
})

const Dark_Variant_Default = createButtonStory({
  args: {
    label: 'Dark Default',
  },
  parameters: {
    withTheme: {
      initialTheme: 'dark',
    },
  },
})

const Dark_Variant_Primary = createButtonStory({
  args: {
    label: 'Dark Primary',
    $variant: 'primary',
  },
  parameters: {
    withTheme: {
      initialTheme: 'dark',
    },
  },
})

const Dark_Variant_Secondary = createButtonStory({
  args: {
    label: 'Dark Secondary',
    $variant: 'secondary',
  },
  parameters: {
    withTheme: {
      initialTheme: 'dark',
    },
  },
})

const Light_Variant_Default = createButtonStory({
  args: {
    label: 'Light Default',
  },
  parameters: {
    withTheme: {
      initialTheme: 'light',
    },
  },
})

const Light_Variant_Primary = createButtonStory({
  args: {
    label: 'Light Primary',
    $variant: 'primary',
  },
  parameters: {
    withTheme: {
      initialTheme: 'light',
    },
  },
})

const Light_Variant_Secondary = createButtonStory({
  args: {
    label: 'Light Secondary',
    $variant: 'secondary',
  },
  parameters: {
    withTheme: {
      initialTheme: 'light',
    },
  },
})

const Size_Small = createButtonStory({
  args: {
    label: 'Small',
    $size: 'small',
  },
})

const Size_Medium = createButtonStory({
  args: {
    label: 'Medium',
    $size: 'medium',
  },
})

const Size_Large = createButtonStory({
  args: {
    label: 'Large',
    $size: 'large',
  },
})
