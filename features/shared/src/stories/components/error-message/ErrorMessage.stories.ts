import type { Meta } from '@storybook/react-webpack5'
import { createComponentStory } from '#testing-utils'
import { ErrorMessage } from '#ui/components/error-message'

type ErrorMessageType = typeof ErrorMessage

const meta = {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
  argTypes: {},
  args: {},
} as Meta<ErrorMessageType>

export default meta

const createErrorMessageStory = createComponentStory<ErrorMessageType>

export const Default = createErrorMessageStory({
  args: {
    children: 'error message',
  },
})
