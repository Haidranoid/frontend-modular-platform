import type { Decorator } from '@storybook/react'
import { RequestHandler } from 'msw'
import { BaseDecoratorParameters } from '#types'

export interface WithMswParameters extends BaseDecoratorParameters {
  handlers: RequestHandler[]
}

export interface WithMswDecoratorParameters {
  msw: Partial<WithMswParameters>
}

export const withMsw: Decorator = (Story, { parameters }) => {
  const params = parameters as WithMswDecoratorParameters
  const config = params.msw

  if (config.disabled) {
    return <Story />
  }

  return (
    <>
      <Story />
    </>
  )
}
