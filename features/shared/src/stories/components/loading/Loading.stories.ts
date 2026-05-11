import type { Meta } from '@storybook/react-webpack5'
import { createComponentStory } from '#testing-utils'
import { Loading } from '#ui/components/loading'

type LoadingType = typeof Loading

const meta = {
  title: 'Components/Loading',
  component: Loading,
  argTypes: {},
  args: {},
} as Meta<LoadingType>

export default meta

const createLoadingStory = createComponentStory<LoadingType>

export const Primary = createLoadingStory({
  args: {
    color: 'primary',
  },
})

export const Secondary = createLoadingStory({
  args: {
    color: 'secondary',
  },
})
