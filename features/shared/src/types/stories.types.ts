import type { ComponentType } from 'react'
import type { Decorator } from '@storybook/react'
import type { StoryObj } from '@storybook/react-webpack5'

export type InferStoryMeta<S> = S extends StoryObj<infer M> ? M : never

export interface CreateBaseStoryParameters<P extends object> {
  parameters?: Partial<P>
}

export type PropsOf<C> = C extends ComponentType<infer P> ? P : never

export type StoryLike<Props, Params> = {
  args?: Partial<Props>
  parameters?: Partial<Params>
  decorators?: Decorator[]
}
