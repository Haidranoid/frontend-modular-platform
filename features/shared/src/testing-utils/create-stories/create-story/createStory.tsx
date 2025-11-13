import { DecoratorFunction } from 'storybook/internal/csf'
import { withTests } from "@storybook/addon-jest";
import { RequestHandler } from 'msw'
import {
  withRedux,
  withTheme,
  withMemoryRouter,
  withStorybookContext,
} from '../../decorators'
import type {
  WithReduxParameters,
  WithThemeParameters,
  WithMemoryRouterParameters,
  WithContextBoxParameters,
} from '../../decorators'

export type CreateStoryParameters = Partial<{
  disableGlobalDecorators?: boolean
  withTests?: {
    disable?: boolean
  }
  msw?: {
    handlers: RequestHandler[]
  }
} & WithReduxParameters & WithThemeParameters & WithMemoryRouterParameters & WithContextBoxParameters>

export interface CreateStoryOptions {
  parameters?: CreateStoryParameters
  args?: Record<string, unknown>
}

export const createStory = ({
  parameters,
  args = {},
}: CreateStoryOptions) => {
  let defaultDecorators: DecoratorFunction[] = [
    withStorybookContext,
    withMemoryRouter,
    withTheme,
    withRedux
  ]

  if (!parameters?.disableGlobalDecorators && !parameters?.withTests?.disable) {
    defaultDecorators = [
      withTests({ results: {}}),
      ...defaultDecorators
    ]
  }

  return {
    decorators: defaultDecorators,
    parameters,
    args,
  }
}
