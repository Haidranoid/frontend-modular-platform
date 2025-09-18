import { FC } from 'react'
import {
  RouterProvider as ReactRouterProvider,
  RouterProviderProps as ReactRouterProviderProps,
} from 'react-router'

// ========================== app render ==============================
export interface RouterProviderOptions {
  routerConfig: ReactRouterProviderProps
}

export const RouterProvider: FC<RouterProviderOptions> = (options) => {
  return <ReactRouterProvider {...options.routerConfig} />
}
