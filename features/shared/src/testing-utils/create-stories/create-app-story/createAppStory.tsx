import { Fragment } from 'react'
import type { ReactRenderer } from '@storybook/react-webpack5'
import { DecoratorFunction } from 'storybook/internal/csf'
import { RequestHandler } from 'msw'

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

export const createAppStory = ({ parameters, args = {} }: CreateAppStoryOptions) => {
  let defaultDecorators: DecoratorFunction[] = [withInitialPath]

  return {
    decorators: defaultDecorators,
    parameters,
    args,
  }
}

//------------------------------------------------
export interface WithInitialPathParameters {
  withInitialPath?: {
    disable?: boolean
    initialPath?: string
  }
}

export const withInitialPath: DecoratorFunction<ReactRenderer> = (
  Story,
  { parameters },
) => {
  const config = (parameters as WithInitialPathParameters).withInitialPath

  window.history.pushState({}, '', config?.initialPath || '/')
  return (
    <Fragment>
      <Story />
    </Fragment>
  )
}
