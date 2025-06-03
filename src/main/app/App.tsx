import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import store from '@store/index'
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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
