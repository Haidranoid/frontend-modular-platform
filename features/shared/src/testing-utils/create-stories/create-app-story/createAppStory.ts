import type { ComponentType } from 'react'
import type { StoryLike, PropsOf } from '#types'
import { WithMswDecoratorParameters } from '../../decorators'

export type CreateAppStoryParameters = {
  initialPath?: string
} & WithMswDecoratorParameters

export function createAppStory<C extends ComponentType<any>>(
  story: StoryLike<PropsOf<C>, CreateAppStoryParameters>,
): StoryLike<PropsOf<C>, CreateAppStoryParameters> {
  const parameters = story.parameters

  if (parameters && parameters.initialPath) {
    window.history.pushState({}, '', parameters.initialPath)
  }

  return { ...story }
}
