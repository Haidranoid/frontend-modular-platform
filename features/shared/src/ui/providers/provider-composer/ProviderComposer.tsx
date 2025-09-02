import { FC } from 'react'
import { Store } from "redux";
import { Provider } from 'react-redux'
import { RouterProvider, RouterProviderProps } from 'react-router/dom'
import { ThemeProvider } from '@libraries/ui'

export interface ProviderComposerProps {
  storeConfig: Store
  routerConfig: RouterProviderProps
}

export const ProviderComposer: FC<ProviderComposerProps> = (props) => {
  const { storeConfig, routerConfig } = props
  return (
    <Provider store={storeConfig}>
      <ThemeProvider>
        <RouterProvider {...routerConfig} />
      </ThemeProvider>
    </Provider>
  )
}
