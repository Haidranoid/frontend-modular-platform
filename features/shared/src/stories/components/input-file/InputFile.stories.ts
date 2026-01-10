import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { fn } from 'storybook/test'
import { createComponentStory } from '#testing-utils'
import { InputFile } from '#ui'

const meta = {
  title: 'Components/InputFile',
  component: InputFile,
  argTypes: {},
  args: {
    files: undefined,
    accept: '.png',
    label: 'inputFile test',
    handleOnChange: fn(),
  },
} satisfies Meta<typeof InputFile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createComponentStory<Story>({
  args: {},
})
