import { FC, ReactNode, JSX } from 'react'
import { EnhancedStore } from '@reduxjs/toolkit'
import { render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react'
import { MemoryRouter, MemoryRouterProps } from 'react-router'
import { Provider } from 'react-redux'
import { ThemeProvider } from '#providers'

export interface SelectiveProvidersProps {
  stateProvider?: boolean
  routerProvider?: boolean
  themeProvider?: boolean
}

// Define the options for your custom render function
export interface CustomRenderOptions extends Omit<RenderOptions, 'queries'> {
  //initialState?: InitialAppState
  initialState?: object
  //storeOverride?: EnhancedStore<RootState>
  storeOverride?: EnhancedStore<object>
  routerProps?: MemoryRouterProps
  selectiveProviders?: SelectiveProvidersProps
}

export type ExtendedRenderResult = RenderResult & {
  store: EnhancedStore<object>
}

export type RenderWithProvidersType = (
  ui: JSX.Element | JSX.Element[],
  customRenderOptions?: CustomRenderOptions,
) => ExtendedRenderResult

const SelectiveProviders: SelectiveProvidersProps = {
  stateProvider: true,
  routerProvider: true,
  themeProvider: true,
}

export const renderEnhanced: RenderWithProvidersType = (
  ui,
  customRenderOptions: CustomRenderOptions = {},
) => {
  const {
    //initialState = initialAppState,
    initialState = {},
    storeOverride,
    routerProps = { initialEntries: ['/'] },
    selectiveProviders = SelectiveProviders,
    ...renderOptions
  } = customRenderOptions

  //const store = storeOverride ?? configureAppStore(initialState)
  const store = {} as EnhancedStore<object>

  const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
    const { stateProvider, routerProvider, themeProvider } = selectiveProviders

    let wrapped = children

    /*
    if (authGateProvider) {
      wrapped = <AuthGate>{wrapped}</AuthGate>
    }

    if (navigationProvider) {
      wrapped = <NavigationMenu>{wrapped}</NavigationMenu>
    }

    if (routerProvider) {
      wrapped = (
        <MemoryRouter initialEntries={routerProps.initialEntries}>{wrapped}</MemoryRouter>
      )
    }

    if (stateProvider) {
      wrapped = <Provider store={store}>{wrapped}</Provider>
    }
    */

    if (themeProvider) {
      wrapped = <ThemeProvider>{wrapped}</ThemeProvider>
    }

    return <>{wrapped}</>
  }

  const view = rtlRender(ui, { wrapper: Wrapper, ...renderOptions })

  return {
    ...view,
    store,
  }
}

// re-export from RTL
export * from '@testing-library/react'
