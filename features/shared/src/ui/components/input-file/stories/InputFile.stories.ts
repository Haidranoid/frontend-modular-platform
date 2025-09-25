import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { fn } from 'storybook/test'
import { InputFile } from '../InputFile'

const meta = {
  title: 'UI/InputFile',
  component: InputFile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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

export const Default: Story = {}
