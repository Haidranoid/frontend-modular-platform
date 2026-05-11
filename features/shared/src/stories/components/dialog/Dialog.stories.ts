import type { Meta } from '@storybook/react-webpack5'
import { createComponentStory } from '#testing-utils'
import { Dialog } from '#ui/components/dialog'

type DialogType = typeof Dialog

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {},
  args: {},
} as Meta<DialogType>

export default meta

const createDialogStory = createComponentStory<DialogType>

export const Default = createDialogStory({})
