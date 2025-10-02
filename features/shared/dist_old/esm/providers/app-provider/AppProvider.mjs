import { StrictMode } from 'react';
import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.mjs';
import { configureAppRouter } from '../../utils/configure-router/configureRouter.mjs';
import { ReduxProvider } from '../redux-provider/ReduxProvider.mjs';
import { ThemeProvider } from '../theme-provider/ThemeProvider.mjs';
import { RouterProvider } from '../router-provider/RouterProvider.mjs';

var AppProvider = function AppProvider(props) {
  var router = configureAppRouter({
    routes: props.routes
  });
  return /*#__PURE__*/jsxRuntimeExports.jsx(StrictMode, {
    children: /*#__PURE__*/jsxRuntimeExports.jsx(ReduxProvider, {
      store: props.store,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(ThemeProvider, {
        children: /*#__PURE__*/jsxRuntimeExports.jsx(RouterProvider, {
          routerConfig: {
            router: router
          }
        })
      })
    })
  });
};

export { AppProvider };
