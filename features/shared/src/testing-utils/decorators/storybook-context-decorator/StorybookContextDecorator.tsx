import { Fragment } from 'react'
import { DecoratorFunction } from 'storybook/internal/csf'
import { ReactRenderer } from '@storybook/react-webpack5'
import { ContextBoxConfig, ComplexItem, StorybookContextBox } from '#ui'

export interface WithContextBoxArgs {
  contextBoxArgs: {
    items?: ComplexItem[]
  }
}

export interface WithContextBoxParameters {
  contextBoxConfig: {
    title?: string
    config?: ContextBoxConfig
    domElement?: HTMLElement
  }
}

export const withStorybookContext: DecoratorFunction<
  ReactRenderer,
  WithContextBoxArgs
> = (Story, { args, parameters }) => {
  if (parameters?.disableGlobalDecorators) return <Story />
  if (parameters?.withStorybookContext?.disable) return <Story />

  const contextBoxConfig = (parameters as WithContextBoxParameters).contextBoxConfig

  return (
    <Fragment>
      <StorybookContextBox
        title={contextBoxConfig?.title || 'App Context'}
        items={args?.contextBoxArgs?.items || []}
        config={contextBoxConfig?.config}
        domElement={
          contextBoxConfig.domElement || document.getElementsByTagName('body')[0]
        }
      />
      <Story />
    </Fragment>
  )
}
