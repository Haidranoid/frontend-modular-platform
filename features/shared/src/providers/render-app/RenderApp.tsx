import { FC, StrictMode } from 'react'
import { Store } from 'redux'
import { RouterProvider, RouterProviderProps } from 'react-router'
import { ThemeProvider } from '@libraries/ui'
import { ReduxProvider } from '../redux-provider'

export interface RenderAppOptions {
  storeConfig: Store
  routerConfig: RouterProviderProps
}

export const RenderApp: FC<RenderAppOptions> = (options) => {
  const { storeConfig, routerConfig } = options

  return (
    <StrictMode>
      <ReduxProvider storeConfig={storeConfig}>
        <ThemeProvider>
          <RouterProvider {...routerConfig} />
        </ThemeProvider>
      </ReduxProvider>
    </StrictMode>
  )
}
