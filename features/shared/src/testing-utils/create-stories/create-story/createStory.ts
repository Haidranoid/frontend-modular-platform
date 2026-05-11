import type { StoryObj } from '@storybook/react-webpack5'
import type { Decorator } from '@storybook/react'
import type { ComponentType } from 'react'
import type { StorybookPreviewParameters } from '#types'
import {
  WithReduxDecoratorParameters,
  WithThemeDecoratorsParameters,
  WithRouterDecoratorParameters,
  WithMswDecoratorParameters,
  withRedux,
  withTheme,
  withRouter,
} from '../../decorators'

export interface DecoratorsParameters
  extends WithReduxDecoratorParameters,
    WithThemeDecoratorsParameters,
    WithRouterDecoratorParameters,
    WithMswDecoratorParameters {}

export interface CreateStoryOptions<S, StoryTyped = S & StoryObj<ComponentType>>
  extends StorybookPreviewParameters {
  story?: StoryTyped
  //args: Args,
  override?: {
    parameters: Partial<DecoratorsParameters>
  }
  integrationStory?: {
    initialPath: string
  }
}

export function createStory<Story>(
  options: CreateStoryOptions<Story>,
  _story?: Story,
): Story {
  const { story, override, integrationStory } = options

  let decorators: Decorator[] = []

  if (integrationStory) {
    window.history.pushState({}, '', integrationStory.initialPath)
  } else {
    //decorators = [withContextBox, withRouter, withTheme, withRedux]
    decorators = [withRouter, withTheme, withRedux]
  }

  return {
    ...story,
    args: {
      ...story?.args,
    },
    decorators,
    parameters: {
      ...story?.parameters,
      ...override?.parameters,
    },
  } as Story
}
