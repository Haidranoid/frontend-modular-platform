import type { Decorator, StoryContext } from '@storybook/react'
import type { BaseDecoratorParameters } from '#types'

export interface BaseStoryContext<P extends object = {} & BaseDecoratorParameters>
  extends StoryContext {
  parameters: P
}

export const configureDecorator: Decorator = (Story, context: BaseStoryContext) => {
  if (!context.parameters.disabled) return <Story />

  return <Story />
}
