import type { Meta } from '@storybook/react-webpack5'
import { createComponentStory } from '#testing-utils'
import { Input } from '#ui/components/input'

type InputType = typeof Input

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {},
  argTypes: {},
  args: {
    labelId: 'username-input-id',
    label: 'username',
  },
} as Meta<InputType>
// } satisfies Meta<typeof Input>

export default meta
//type Story = StoryObj<typeof meta>
//type Story = StoryObj<InputType>
//type Story = any

const createInputStory = createComponentStory<InputType>

export const Default = createInputStory({
  args: {},
})

export const Dark_Status_Success = createInputStory({
  args: {
    $status: 'success',
  },
  parameters: {
    withTheme: {
      initialTheme: 'dark',
    },
  },
})

export const Dark_Status_Error = createInputStory({
  args: {
    $status: 'error',
  },
  parameters: {
    withTheme: {
      initialTheme: 'dark',
    },
  },
})

export const Dark_Status_Warning = createInputStory({
  args: {
    $status: 'warning',
  },
  parameters: {
    withTheme: {
      initialTheme: 'dark',
    },
  },
})

export const Light_Status_Success = createInputStory({
  args: {
    $status: 'success',
  },
  parameters: {
    withTheme: {
      initialTheme: 'light',
    },
  },
})

export const Light_Status_Error = createInputStory({
  args: {
    $status: 'error',
  },
  parameters: {
    withTheme: {
      initialTheme: 'light',
    },
  },
})

export const Light_Status_Warning = createInputStory({
  args: {
    $status: 'warning',
  },
  parameters: {
    withTheme: {
      initialTheme: 'light',
    },
  },
})

export const Size_Small = createInputStory({
  args: {
    $size: 'small',
  },
})

export const Size_Medium = createInputStory({
  args: {
    $size: 'medium',
  },
})

export const Size_Large = createInputStory({
  args: {
    $size: 'large',
  },
})
