import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { ThemeProvider } from '@theme-provider/ThemeProvider'
import store from '@store'
import router from '@router'

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
