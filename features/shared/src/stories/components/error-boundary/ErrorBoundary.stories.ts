import type { Meta } from '@storybook/react-webpack5'
import { createComponentStory } from '#testing-utils'
import { ErrorBoundary } from '#ui/components/error-boundary'

type ErrorBoundaryType = typeof ErrorBoundary

const meta = {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
  argTypes: {},
  args: {},
} as Meta<ErrorBoundaryType>

export default meta

const createErrorBoundaryStory = createComponentStory<ErrorBoundaryType>

export const Default = createErrorBoundaryStory({
  args: {},
})