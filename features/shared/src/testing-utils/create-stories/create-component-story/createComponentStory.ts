import type { ComponentType } from 'react'
import type { StoryLike, PropsOf } from '#types'
import {
  withTheme,
  WithThemeDecoratorsParameters,
  WithMswDecoratorParameters,
} from '../../decorators'

export type CreateComponentStoryParameters = WithThemeDecoratorsParameters &
  WithMswDecoratorParameters

export function createComponentStory<C extends ComponentType<any>>(
  story: StoryLike<PropsOf<C>, CreateComponentStoryParameters>,
): StoryLike<PropsOf<C>, CreateComponentStoryParameters> {
  return {
    ...story,
    decorators: [withTheme],
  }
}
