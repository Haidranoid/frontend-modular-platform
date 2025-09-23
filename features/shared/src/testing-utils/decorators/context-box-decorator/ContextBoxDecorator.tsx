import { Fragment } from 'react'
import { DecoratorFunction } from 'storybook/internal/csf'
import { ReactRenderer } from '@storybook/react-webpack5'
import { ContextBoxConfig, ComplexItem, ContextBox } from '#ui'

export interface WithContextBoxParameters {
  contextBoxConfig: {
    title?: string
    items?: ComplexItem[]
    config?: ContextBoxConfig
    domElement?: HTMLElement
  }
}

export const withContextBox: DecoratorFunction<ReactRenderer> = (
  Story,
  { parameters },
) => {
  if (parameters?.disableGlobalDecorators) return <Story />
  if (parameters?.withContextBox?.disable) return <Story />

  const contextBoxConfig = (parameters as WithContextBoxParameters).contextBoxConfig

  return (
    <Fragment>
      <ContextBox
        title={contextBoxConfig.title || 'App Context'}
        items={contextBoxConfig.items || []}
        config={contextBoxConfig.config}
        domElement={
          contextBoxConfig.domElement || document.getElementsByTagName('body')[0]
        }
      />
      <Story />
    </Fragment>
  )
}
