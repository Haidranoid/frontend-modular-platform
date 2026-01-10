import type { Decorator } from '@storybook/react'
import type { BaseDecoratorParameters } from '#types'
import { ContextBox, ContextBoxProps } from '#ui'

export interface WithContextBoxParameters
  extends ContextBoxProps,
    BaseDecoratorParameters {}

export interface WithContextBoxDecoratorParameters {
  withContextBox: Partial<WithContextBoxParameters>
}

export const withContextBox: Decorator = (Story, { parameters }) => {
  const params = parameters as WithContextBoxDecoratorParameters
  const config = params.withContextBox

  if (config.disabled) {
    return <Story />
  }

  return (
    <>
      <ContextBox
        title={config?.title || 'App Context'}
        reducerId={config?.reducerId || ''}
        items={config?.items || []}
        config={config?.config}
        domElement={config?.domElement || document.body}
      />
      <Story />
    </>
  )
}
