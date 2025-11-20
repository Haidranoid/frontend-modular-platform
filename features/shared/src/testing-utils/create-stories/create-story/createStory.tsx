import { DecoratorFunction } from 'storybook/internal/csf'
import { RequestHandler } from 'msw'
import { withRedux, withTheme, withRouter, withStorybookContext } from '../../decorators'
import type {
  WithReduxParameters,
  WithThemeParameters,
  WithRouterParameters,
  WithContextBoxParameters,
} from '../../decorators'

export type CreateStoryParameters = Partial<
  {
    disableDecorators?: boolean
    integrationStory?: boolean
    msw?: { handlers: RequestHandler[] }
  } & WithReduxParameters<any, any> &
    WithThemeParameters &
    WithRouterParameters &
    WithContextBoxParameters
>

export interface CreateStoryOptions {
  parameters?: CreateStoryParameters
  args?: Record<string, unknown>
}

export const createStory = ({ parameters, args = {} }: CreateStoryOptions) => {
  let defaultDecorators: DecoratorFunction[] = []

  if (!parameters?.integrationStory) {
    defaultDecorators = [withStorybookContext, withRouter, withTheme, withRedux]
  }

  return {
    decorators: defaultDecorators,
    parameters,
    args,
  }
}
