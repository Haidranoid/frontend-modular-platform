import type { StoryObj } from '@storybook/react-webpack5'
import type { Decorator } from '@storybook/react'
import type { CreateBaseStoryParameters, InferStoryMeta } from '#types'
import {
  WithReduxDecoratorParameters,
  WithThemeDecoratorsParameters,
  WithRouterDecoratorParameters,
  WithMswDecoratorParameters,
  WithContextBoxDecoratorParameters,
  withRedux,
  withTheme,
  withRouter,
  withContextBox,
} from '../../decorators'

export type CreateIntegrationStoryParameters = WithReduxDecoratorParameters &
  WithThemeDecoratorsParameters &
  WithRouterDecoratorParameters &
  WithMswDecoratorParameters &
  WithContextBoxDecoratorParameters

export function createIntegrationStory<
  Story,
  TStory extends StoryObj = StoryObj<InferStoryMeta<Story>>,
  TSParameters extends
    object = CreateBaseStoryParameters<CreateIntegrationStoryParameters>,
>(story: Story & TStory & TSParameters) {
  const decorators: Decorator[] = [withContextBox, withRouter, withTheme, withRedux]

  return { ...story, decorators }
}
