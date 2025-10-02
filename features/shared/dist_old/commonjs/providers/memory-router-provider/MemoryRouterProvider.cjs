'use strict';

var reactRouter = require('react-router');
var jsxRuntime = require('../../_virtual/jsx-runtime.cjs');
var RouterProvider = require('../router-provider/RouterProvider.cjs');

var MemoryRouterProvider = function MemoryRouterProvider(_ref) {
  var routes = _ref.routes,
    _ref$initialPath = _ref.initialPath,
    initialPath = _ref$initialPath === void 0 ? '/' : _ref$initialPath,
    wrapper = _ref.wrapper;
  var rootRoute = {
    element: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(jsxRuntime.jsxRuntimeExports.Fragment, {
      children: [wrapper, /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(reactRouter.Outlet, {})]
    }),
    children: routes
  };
  var router = reactRouter.createMemoryRouter([rootRoute], {
    initialEntries: [initialPath]
  });
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(RouterProvider.RouterProvider, {
    routerConfig: {
      router: router
    }
  });
};

exports.MemoryRouterProvider = MemoryRouterProvider;
