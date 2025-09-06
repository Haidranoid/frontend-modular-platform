import { RouterProviderProps } from "react-router";
import { DecoratorFunction } from 'storybook/internal/csf'
import { ReactRenderer } from "@storybook/react-webpack5";
import { RouterProvider } from '#providers'

export interface WithRouterProps {
  routerConfig: RouterProviderProps
}

export const withRouter: DecoratorFunction<ReactRenderer, WithRouterProps> = (Story, { args }) => {
  return (
    <RouterProvider routerConfig={args.routerConfig}/>
  )
}
