import { FC, ReactNode } from 'react'
import {
  RouterProvider as ReactRouterProvider,
  RouterProviderProps as ReactRouterProviderProps,
  MemoryRouter,
} from 'react-router'

// ========================== app render ==============================
export interface RouterProviderOptions {
  routerConfig: ReactRouterProviderProps
}

export const RouterProvider: FC<RouterProviderOptions> = (options) => {
  return <ReactRouterProvider {...options.routerConfig} />
}

// ========================== storybook render ==============================
export interface MemoryRouterProviderProps {
  children: ReactNode
  initialPath?: string
}

export const MemoryRouterProvider: FC<MemoryRouterProviderProps> = (props) => {
  return (
    <MemoryRouter initialEntries={[props.initialPath || '/']}>
      {props.children}
    </MemoryRouter>
  )
}
