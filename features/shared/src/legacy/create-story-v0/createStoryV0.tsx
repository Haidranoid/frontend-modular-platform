import { DecoratorFunction } from 'storybook/internal/csf'
import { RequestHandler } from 'msw'
import { withRedux, withTheme, withRouter, withContextBox } from '../../decorators'
import type {
  WithReduxParameters,
  WithThemeParameters,
  WithRouterParameters,
  WithContextBoxParameters,
} from '../../decorators'

export type CreateStoryParametersV = Partial<
  {
    disableDecorators?: boolean
    integrationStory?: boolean
    msw?: { handlers: RequestHandler[] }
  } & WithReduxParameters<any, any> &
    WithThemeParameters &
    WithRouterParameters &
    WithContextBoxParameters
>

export interface CreateStoryOptionsV {
  parameters?: CreateStoryParametersV
  args?: Record<string, unknown>
}

export const createStoryV0 = ({ parameters, args = {} }: CreateStoryOptionsV) => {
  let defaultDecorators: DecoratorFunction[] = []

  if (!parameters?.integrationStory) {
    defaultDecorators = [withContextBox, withRouter, withTheme, withRedux]
  }

  console.log({ parameters })
  return {
    decorators: defaultDecorators,
    parameters,
    args,
  }
}
