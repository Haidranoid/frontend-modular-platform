import React from 'react'
import { EnhancedStore } from '@reduxjs/toolkit'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { MemoryRouter, MemoryRouterProps } from 'react-router'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@libraries/ui'
//import { initialAppState, InitialAppState } from '@features/reducer'
//import { configureAppStore, RootState } from '@store'

interface SelectiveProvidersProps {
  stateProvider?: boolean
  routerProvider?: boolean
  themeProvider?: boolean
}

// Define the options for your custom render function
interface CustomRenderOptions extends Omit<RenderOptions, 'queries'> {
  //initialState?: InitialAppState
  initialState?: object
  //storeOverride?: EnhancedStore<RootState>
  storeOverride?: EnhancedStore<object>
  routerProps?: MemoryRouterProps
  selectiveProviders?: SelectiveProvidersProps
}

type ExtendedRenderResult = RenderResult & {
  store: EnhancedStore<object>
}

type RenderWithProvidersType = (
  ui: React.JSX.Element | React.JSX.Element[],
  customRenderOptions?: CustomRenderOptions,
) => ExtendedRenderResult

const SelectiveProviders: SelectiveProvidersProps = {
  stateProvider: true,
  routerProvider: true,
  themeProvider: true,
}

const renderWithProviders: RenderWithProvidersType = (
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

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { stateProvider, routerProvider, themeProvider } = selectiveProviders

    let wrapped = children

    /*
    if (authGateProvider) {
      wrapped = <AuthGate>{wrapped}</AuthGate>
    }

    if (navigationProvider) {
      wrapped = <NavigationMenu>{wrapped}</NavigationMenu>
    }

    */

    if (routerProvider) {
      wrapped = (
        <MemoryRouter initialEntries={routerProps.initialEntries}>{wrapped}</MemoryRouter>
      )
    }

    if (themeProvider) {
      wrapped = <ThemeProvider>{wrapped}</ThemeProvider>
    }

    if (stateProvider) {
      wrapped = <Provider store={store}>{wrapped}</Provider>
    }

    return <>{wrapped}</>
  }

  const view = render(ui, { wrapper: Wrapper, ...renderOptions })

  return {
    ...view,
    store,
  }
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { renderWithProviders }
export type { SelectiveProvidersProps }
