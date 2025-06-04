// test-utils.tsx
import React from 'react'
import { EnhancedStore } from '@reduxjs/toolkit'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createMemoryRouter, MemoryRouterProps } from 'react-router'
import { initialAppState, InitialAppState } from '@features/app.reducer'
import { configureAppStore, RootState } from '@store'

// TODO: check this
/*
import ThemeProvider from '../../main/styles/theme/ThemeProvider'
import CacheProvider from '../../main/styles/cache/CacheProvider'
const conditionalProviders = [
  [ProvidersObject.STATE_PROVIDER, (children: React.ReactNode) => <Provider store={store}>{children}</Provider>],
  [ProvidersObject.ROUTER_PROVIDER, (children) => <MemoryRouter {...routerProps}>{children}</MemoryRouter>],
  [ProvidersObject.CACHE_PROVIDER, (children) => <CacheProvider>{children}</CacheProvider>],
  [ProvidersObject.THEME_PROVIDER, (children) => <ThemeProvider>{children}</ThemeProvider>],
];

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const wrapped = conditionalProviders.reduce(
    (acc, [enabled, wrap]) => (enabled ? wrap(acc) : acc),
    children
  );
  return <>{wrapped}</>;
};



    if (switchProvider) {
      wrapped = <Switch>{wrapped}</Switch>
    }

    if (suspenseProvider) {
      wrapped = <Suspense fallback={<Loading color="primary" />}>{wrapped}</Suspense>
    }

    if (authGateProvider) {
      wrapped = <AuthGate>{wrapped}</AuthGate>
    }

    if (navigationProvider) {
      wrapped = <NavigationMenu>{wrapped}</NavigationMenu>
    }

    if (themeProvider) {
      wrapped = <ThemeProvider>{wrapped}</ThemeProvider>
    }

    if (cacheProvider) {
      wrapped = <CacheProvider>{wrapped}</CacheProvider>
    }

*/

interface SelectiveProvidersProps {
  stateProvider?: boolean
  routerProvider?: boolean
  cacheProvider?: boolean
  themeProvider?: boolean
}

const SelectiveProviders: SelectiveProvidersProps = {
  stateProvider: true,
  routerProvider: true,
  cacheProvider: true,
  themeProvider: true,
}

// Define the options for your custom render function
interface CustomRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialState?: InitialAppState
  storeOverride?: EnhancedStore<RootState>
  routerProps?: MemoryRouterProps
  selectiveProviders?: SelectiveProvidersProps
}

type ExtendedRenderResult = RenderResult & {
  store: EnhancedStore<RootState>
}

type RenderWithProvidersType = (
  ui: React.JSX.Element | React.JSX.Element[],
  customRenderOptions?: CustomRenderOptions,
) => ExtendedRenderResult

const renderWithProviders: RenderWithProvidersType = (
  ui,
  customRenderOptions: CustomRenderOptions = {},
) => {
  const {
    initialState = initialAppState,
    storeOverride,
    routerProps = { initialEntries: ['/'] },
    selectiveProviders = SelectiveProviders,
    ...renderOptions
  } = customRenderOptions

  const store = storeOverride ?? configureAppStore(initialState)

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { stateProvider, routerProvider, cacheProvider, themeProvider } =
      selectiveProviders

    let wrapped = children

    /*
    if (switchProvider) {
      wrapped = <Switch>{wrapped}</Switch>
    }

    if (suspenseProvider) {
      wrapped = <Suspense fallback={<Loading color="primary" />}>{wrapped}</Suspense>
    }

    if (authGateProvider) {
      wrapped = <AuthGate>{wrapped}</AuthGate>
    }

    if (navigationProvider) {
      wrapped = <NavigationMenu>{wrapped}</NavigationMenu>
    }

    if (themeProvider) {
      wrapped = <ThemeProvider>{wrapped}</ThemeProvider>
    }

    if (cacheProvider) {
      wrapped = <CacheProvider>{wrapped}</CacheProvider>
    }
    
    if (routerProvider) {
      wrapped = (
        <MemoryRouter initialEntries={routerProps.initialEntries}>{wrapped}</MemoryRouter>
      )
    }
    */

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
