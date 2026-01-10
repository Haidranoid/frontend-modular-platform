import type { StoryObj } from '@storybook/react-webpack5'

export type InferStoryMeta<S> = S extends StoryObj<infer M> ? M : never

export interface CreateBaseStoryParameters<P extends object> {
  parameters?: Partial<P>
}
