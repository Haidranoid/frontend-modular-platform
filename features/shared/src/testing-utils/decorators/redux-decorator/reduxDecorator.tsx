import { ReduxProvider } from '#state'
import { DecoratorFunction } from 'storybook/internal/csf'

export const withReduxProvider: DecoratorFunction = (Story, { parameters }) => {
  return (
    <ReduxProvider storeConfig={parameters.storeConfig}>
      <Story />
    </ReduxProvider>
  )
}
