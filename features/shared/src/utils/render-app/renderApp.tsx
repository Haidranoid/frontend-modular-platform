import { StrictMode, JSX } from 'react'
import type { EnhancedStore } from '@reduxjs/toolkit'
import type { ThunkDispatch } from '@reduxjs/toolkit'
import type { DataRouter } from 'react-router'
import { ReduxProvider, ThemeProvider, RouterProvider } from '#providers'

export type InitializerAction<
  S = any,
  D extends ThunkDispatch<any, any, any> = ThunkDispatch<any, any, any>,
> = (dispatch: D, getState: () => S) => Promise<void>

export interface RenderAppParams {
  config: {
    store: EnhancedStore
    router: DataRouter
    initializerAction: InitializerAction
  }
  options: {
    strictMode?: boolean
    disableAuthGuard?: boolean
  }
}

export const renderApp = ({
  config: { store, router, initializerAction },
  options: { strictMode = true },
}: RenderAppParams): JSX.Element => {
  if (initializerAction) {
    initializerAction(store.dispatch, store.getState)
  }

  const app = (
    <>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <RouterProvider config={{ router }} />
        </ThemeProvider>
      </ReduxProvider>
    </>
  )

  return strictMode ? <StrictMode>{app}</StrictMode> : app
}
