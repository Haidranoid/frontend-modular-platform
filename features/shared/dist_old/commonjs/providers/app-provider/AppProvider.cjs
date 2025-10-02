'use strict';

var require$$0 = require('react');
var jsxRuntime = require('../../_virtual/jsx-runtime.cjs');
var configureRouter = require('../../utils/configure-router/configureRouter.cjs');
var ReduxProvider = require('../redux-provider/ReduxProvider.cjs');
var ThemeProvider = require('../theme-provider/ThemeProvider.cjs');
var RouterProvider = require('../router-provider/RouterProvider.cjs');

var AppProvider = function AppProvider(props) {
  var router = configureRouter.configureAppRouter({
    routes: props.routes
  });
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(require$$0.StrictMode, {
    children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ReduxProvider.ReduxProvider, {
      store: props.store,
      children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ThemeProvider.ThemeProvider, {
        children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(RouterProvider.RouterProvider, {
          routerConfig: {
            router: router
          }
        })
      })
    })
  });
};

exports.AppProvider = AppProvider;
