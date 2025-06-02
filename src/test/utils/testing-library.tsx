// test-utils.tsx
import React, { Suspense } from 'react'
import thunk from 'redux-thunk'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { legacy_createStore as createStore, Store, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, MemoryRouterProps } from 'react-router'
import { createMemoryHistory, MemoryHistory } from 'history'
import NavigationMenu from '../../main/components/navigation-menu/NavigationMenu'
import AuthGate from '../../main/experimental/auth-gate/AuthGate'
import Loading from '../../main/components/loading/Loading'
import ThemeProvider from '../../main/styles/theme/ThemeProvider'
import CacheProvider from '../../main/styles/cache/CacheProvider'
import { AppReducerState } from '@state/app/reducers/app.reducer.types'
import { initialRootState as defaultInitialState } from '../../main/state/store/old'
import rootReducer from '@state/root-reducer/root.reducer'
import { Switch } from 'react-router-dom'
//import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
//const mockStore = configureStore<RootReducerState>()

// TODO: check this
/*
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
*/

interface SelectiveProvidersProps {
  stateProvider?: boolean
  routerProvider?: boolean
  cacheProvider?: boolean
  themeProvider?: boolean
  navigationProvider?: boolean
  authGateProvider?: boolean
  suspenseProvider?: boolean
  switchProvider?: boolean
}

const SelectiveProviders: SelectiveProvidersProps = {
  stateProvider: true,
  routerProvider: true,
  cacheProvider: true,
  themeProvider: true,
  navigationProvider: false,
  authGateProvider: false,
  suspenseProvider: false,
  switchProvider: false,
}

// Define the options for your custom render function
interface CustomRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialState?: AppReducerState
  storeOverride?: Store<AppReducerState>
  routerProps?: MemoryRouterProps
  selectiveProviders?: SelectiveProvidersProps
  history?: MemoryHistory
}

type ExtendedRenderResult = RenderResult & {
  store: Store<AppReducerState>
  history: MemoryHistory
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
    initialState = defaultInitialState,
    storeOverride,
    routerProps = { initialEntries: ['/'] },
    selectiveProviders = SelectiveProviders,
    history,
    ...renderOptions
  } = customRenderOptions

  const store =
    storeOverride ?? createStore(rootReducer, initialState, applyMiddleware(thunk))
  const memoryHistory =
    history ?? createMemoryHistory({ initialEntries: routerProps.initialEntries })

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const {
      stateProvider,
      routerProvider,
      cacheProvider,
      themeProvider,
      navigationProvider,
      authGateProvider,
      suspenseProvider,
      switchProvider,
    } = selectiveProviders

    let wrapped = children

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
      wrapped = <Router history={memoryHistory}>{wrapped}</Router>
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
    history: memoryHistory,
  }
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { renderWithProviders }
export type { SelectiveProvidersProps }
