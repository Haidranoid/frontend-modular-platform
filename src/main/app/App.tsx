import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { ThemeProvider } from '@theme-provider/ThemeProvider'
import { useThemeMode } from '@theme-provider/hooks/useThemeMode'
import store from '@store'
import router from '@router'
/*
const App: FC = () => {
  return (
    <Router history={history}>
      <CacheProvider>
        <ThemeProvider>
          <NavigationMenu>
            <AuthGate>
              <Suspense fallback={<Loading color="primary" />}>
                <Switch>{RenderRoutes}</Switch>
              </Suspense>
            </AuthGate>
          </NavigationMenu>
        </ThemeProvider>
      </CacheProvider>
    </Router>
  )
}*/

const App: FC = () => {
  const theme = useThemeMode()

  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
