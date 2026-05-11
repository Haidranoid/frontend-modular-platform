import type { Meta } from '@storybook/react-webpack5'
import { fn } from 'storybook/test'
import { createComponentStory } from '#testing-utils'
import { InputFile } from '#ui/components/input-file'

type InputFileType = typeof InputFile

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
} as Meta<InputFileType>

export default meta

const createInputFileStory = createComponentStory<InputFileType>

export const Default = createInputFileStory({
  args: {},
})
