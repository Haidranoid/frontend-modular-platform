import type { Meta } from '@storybook/react-webpack5'
import { createComponentStory } from '#testing-utils'
import { Select } from '#ui/components/select'

type SelectType = typeof Select

const meta = {
  title: 'Components/Select',
  component: Select,
  argTypes: {},
  args: {
    label: 'select role',
    options: [
      { value: 'ADMIN', displayValue: 'Administrator' },
      { value: 'USER', displayValue: 'User' },
    ],
  },
} as Meta<SelectType>

export default meta

const createSelectStory = createComponentStory<SelectType>

export const Default = createSelectStory({
  args: {},
})

export const Size_Small = createSelectStory({
  args: {
    $size: 'small',
  },
})

export const Size_Medium = createSelectStory({
  args: {
    $size: 'medium',
  },
})

export const Size_Large = createSelectStory({
  args: {
    $size: 'large',
  },
})
