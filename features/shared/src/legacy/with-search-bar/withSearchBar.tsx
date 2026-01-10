import type { Decorator } from '@storybook/react'
import { RouterSearchBar } from '#ui'
import { BaseDecoratorParameters } from '#types'

export interface WithSearchBarParameters extends BaseDecoratorParameters {}

export interface WithSearchBarDecoratorParameters {
  withSearchBar: Partial<WithSearchBarParameters>
}

export const withSearchBar: Decorator = (Story, { parameters }) => {
  const params = parameters as WithSearchBarDecoratorParameters
  const config = params.withSearchBar

  if (config.disabled) {
    return <Story />
  }

  return (
    <>
      <RouterSearchBar />
      <Story />
    </>
  )
}
