import { RequestHandler } from 'msw'
import { DecoratorFunction } from "storybook/internal/csf";
import { withStorybookContext } from "../../decorators";

export type CreateAppStoryParameters = Partial<{
  disableGlobalDecorators?: boolean
  msw?: {
    handlers: RequestHandler[]
  }
}>

export interface CreateAppStoryOptions {
  parameters?: CreateAppStoryParameters
  args?: Record<string, unknown>
}

export const createAppStory = ({
  parameters,
  args = {},
}: CreateAppStoryOptions) => {

  return {
    parameters,
    args,
  }
}
