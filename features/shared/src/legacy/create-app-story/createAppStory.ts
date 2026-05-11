import type { StoryObj } from '@storybook/react-webpack5'
import type { CreateBaseStoryParameters, InferStoryMeta } from '#types'

export interface CreateAppStoryParameters {
  initialPath?: string
}

export function createAppStory<
  Story,
  TStory extends StoryObj = StoryObj<InferStoryMeta<Story>>,
  TSParameters extends object = CreateBaseStoryParameters<CreateAppStoryParameters>,
>(story: Story & TStory & TSParameters) {
  const parameters = story.parameters

  if (parameters && parameters.initialPath) {
    window.history.pushState({}, '', parameters.initialPath)
  }

  return { ...story }
}
