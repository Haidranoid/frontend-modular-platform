import type { ComponentType } from 'react'
import type { StoryObj } from '@storybook/react-webpack5'
import type { Decorator } from '@storybook/react'
import { withTheme, WithThemeDecoratorsParameters } from '../../decorators'

export type CreateComponentStoryParameters = WithThemeDecoratorsParameters

/*
export function createComponentStory<
  Story,
  TStoryObj extends StoryObj = StoryObj<InferStoryMeta<Story>>,
  TSParameters extends object = CreateBaseStoryParameters<CreateComponentStoryParameters>,
>(story: Story & TStoryObj & TSParameters) {
  const decorators: Decorator[] = [withTheme]

  return { ...story, decorators }
}

export function createComponentStory<
  T extends StoryObj<any>
>(
  story: Omit<T, 'parameters'> & {
    parameters?: T['parameters'] & Partial<CreateComponentStoryParameters>
  }
): T {
  return {
    ...story,
    decorators: [withTheme],
  }
}

export function createComponentStory<
    T extends StoryObj<any>
>(
    story: T & {
      parameters?: Partial<CreateComponentStoryParameters>
    }
): T {
  const decorators: Decorator[] = [withTheme]

  return { ...story, decorators }
}

//export function createComponentStory<C extends ComponentType<any>>(
export function createComponentStory<T>(
  story: T & {
    parameters?: Partial<CreateComponentStoryParameters>
  },
): T & {
  parameters?: Partial<CreateComponentStoryParameters>
} {
  return {
    ...story,
    decorators: [withTheme],
  }
}

type PropsOf<C> = C extends ComponentType<infer P> ? P : never

export function createComponentStory<
    C extends ComponentType<any>
>(
    story: Omit<StoryObj<C>, 'args' | 'parameters'> & {
      args: PropsOf<C>
      parameters?: Partial<CreateComponentStoryParameters>
    }
): StoryObj<C> {
  return {
    ...story,
    decorators: [withTheme],
  }
}

export function createComponentStory<Story>(
  story: Story & {
    parameters?: Partial<CreateComponentStoryParameters>
  },
): Story {
  return {
    ...story,
    decorators: [withTheme],
  }
}
*/

export function createComponentStory<
    C extends ComponentType<any>
>(
    story: StoryObj<C> & {
        parameters?: Partial<CreateComponentStoryParameters>
    }
): StoryObj<C> {
    return {
        ...story,
        decorators: [withTheme],
    }
}