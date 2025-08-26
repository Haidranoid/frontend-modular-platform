import { FC, ReactNode } from 'react'
import { RouterProvider, RouterProviderProps } from 'react-router'
import { Provider, ProviderProps } from 'react-redux'
import { ThemeProvider } from '@libraries/ui'

interface ProviderComposerProps {
  children?: ReactNode
  reduxProviderProps: ProviderProps
  routerProviderProps: RouterProviderProps
}

export const ProviderComposer: FC<ProviderComposerProps> = (props) => {
  return (
    <Provider {...props.reduxProviderProps}>
      <ThemeProvider>
        <RouterProvider {...props.routerProviderProps} />
      </ThemeProvider>
    </Provider>
  )
}
