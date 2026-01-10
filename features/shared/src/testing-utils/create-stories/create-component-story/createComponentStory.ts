import type { StoryObj } from '@storybook/react-webpack5'
import type { Decorator } from '@storybook/react'
import type { InferStoryMeta, CreateBaseStoryParameters } from '#types'
import { withTheme, WithThemeDecoratorsParameters } from '../../decorators'

export type CreateComponentStoryParameters = WithThemeDecoratorsParameters

export function createComponentStory<
  Story,
  TStoryObj extends StoryObj = StoryObj<InferStoryMeta<Story>>,
  TSParameters extends object = CreateBaseStoryParameters<CreateComponentStoryParameters>,
>(story: Story & TStoryObj & TSParameters) {
  const decorators: Decorator[] = [withTheme]

  return { ...story, decorators }
}
