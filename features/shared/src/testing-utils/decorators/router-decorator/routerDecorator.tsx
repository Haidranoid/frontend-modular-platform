import { DecoratorFunction } from 'storybook/internal/csf'
import { ReactRenderer } from '@storybook/react-webpack5'
import { MemoryRouterProvider } from '#providers'

export interface WithRouterProps {
  initialPath?: string
}

export const withRouter: DecoratorFunction<ReactRenderer, WithRouterProps> = (
  Story,
  { args },
) => {
  return (
    <MemoryRouterProvider initialPath={args.initialPath}>
      <Story />
    </MemoryRouterProvider>
  )
}
