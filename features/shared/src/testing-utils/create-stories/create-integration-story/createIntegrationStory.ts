import type { ComponentType } from 'react'
import type { StoryLike, PropsOf } from '#types'
import {
  WithReduxDecoratorParameters,
  WithThemeDecoratorsParameters,
  WithRouterDecoratorParameters,
  WithMswDecoratorParameters,
  withRedux,
  withTheme,
  withRouter,
} from '../../decorators'

export type CreateIntegrationStoryParameters = WithReduxDecoratorParameters &
  WithThemeDecoratorsParameters &
  WithRouterDecoratorParameters &
  WithMswDecoratorParameters

export function createIntegrationStory<C extends ComponentType<any>>(
  story: StoryLike<PropsOf<C>, CreateIntegrationStoryParameters>,
): StoryLike<PropsOf<C>, CreateIntegrationStoryParameters> {
  return {
    ...story,
    decorators: [withRouter, withTheme, withRedux],
  }
}
