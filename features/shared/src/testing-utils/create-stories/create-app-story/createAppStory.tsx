import { Fragment } from 'react'
import type { ReactRenderer } from '@storybook/react-webpack5'
import type { DecoratorFunction } from 'storybook/internal/csf'
import { RequestHandler } from 'msw'

export type CreateAppStoryParameters = Partial<{
  msw?: { handlers: RequestHandler[] }
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

//-----------------------------------------------------------------------------
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

export interface WithTestResultsParameters {
  withTestResults?: {
    disable?: boolean
    results?: Record<string, unknown>
  }
}

export const withTestResults: DecoratorFunction<ReactRenderer> = (
  Story,
  { parameters },
) => {
  const results = (parameters as WithTestResultsParameters).withTestResults?.results

  if (results) {
  }

  return (
    <Fragment>
      <Story />
    </Fragment>
  )
}
