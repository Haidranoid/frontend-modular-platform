import type { Decorator } from '@storybook/react'
import { RequestHandler } from 'msw'

export type CreateAppStoryParameters = Partial<{
  msw?: { handlers: RequestHandler[] }
}>

export interface CreateAppStoryOptions {
  parameters?: CreateAppStoryParameters
  args?: Record<string, unknown>
}

export const createAppStory = ({ parameters, args = {} }: CreateAppStoryOptions) => {
  let defaultDecorators: Decorator[] = [withInitialPath]

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

export const withInitialPath: Decorator = (Story, { parameters }) => {
  const config = (parameters as WithInitialPathParameters).withInitialPath

  window.history.pushState({}, '', config?.initialPath || '/')
  return (
    <>
      <Story />
    </>
  )
}

export interface WithTestResultsParameters {
  withTestResults?: {
    disable?: boolean
    results?: Record<string, unknown>
  }
}

export const withTestResults: Decorator = (Story, { parameters }) => {
  const results = (parameters as WithTestResultsParameters).withTestResults?.results

  if (results) {
  }

  return (
    <>
      <Story />
    </>
  )
}
