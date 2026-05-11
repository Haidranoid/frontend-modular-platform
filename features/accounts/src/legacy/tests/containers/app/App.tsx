import React, { FC, Suspense } from 'react'
import { Router, Switch } from 'react-router-dom'
import history from '@history'

import ThemeProvider from '@styles/theme/ThemeProvider'
import CacheProvider from '@styles/cache/CacheProvider'
import NavigationMenu from '@components/navigation-menu/NavigationMenu'
import Loading from '@components/loading/Loading'
import AuthGate from '@experimental/auth-gate/AuthGate'
import { RenderRoutes } from '@routes/helpers'

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
}

export default App
