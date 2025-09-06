import { Store } from "redux";
import { RouterProviderProps } from "react-router";
import { DecoratorFunction } from 'storybook/internal/csf'
import { ReactRenderer } from "@storybook/react-webpack5";
import { AppProvider } from '#providers'

export interface WithAppProps {
  store: Store
  routerConfig: RouterProviderProps
}

export const withApp: DecoratorFunction<ReactRenderer, WithAppProps> = (Story, { args }) => {
  return (
    <AppProvider store={args.store} routerConfig={args.routerConfig}/>
  )
}
