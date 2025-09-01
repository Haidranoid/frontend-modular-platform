import { FC } from 'react'
import { Provider, ProviderProps } from 'react-redux'
import { RouterProvider, RouterProviderProps } from 'react-router'
import { ThemeProvider } from '@libraries/ui'

interface ProviderComposerProps {
  reduxConfig: ProviderProps
  routerConfig: RouterProviderProps
}

export const ProviderComposer: FC<ProviderComposerProps> = (props) => {
  const { reduxConfig, routerConfig } = props
  return (
    <Provider {...reduxConfig}>
      <ThemeProvider>
        <RouterProvider {...routerConfig} />
      </ThemeProvider>
    </Provider>
  )
}
