import { createMemoryRouter, Outlet } from 'react-router';
import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.mjs';
import { RouterProvider } from '../router-provider/RouterProvider.mjs';

var MemoryRouterProvider = function MemoryRouterProvider(_ref) {
  var routes = _ref.routes,
    _ref$initialPath = _ref.initialPath,
    initialPath = _ref$initialPath === void 0 ? '/' : _ref$initialPath,
    wrapper = _ref.wrapper;
  var rootRoute = {
    element: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [wrapper, /*#__PURE__*/jsxRuntimeExports.jsx(Outlet, {})]
    }),
    children: routes
  };
  var router = createMemoryRouter([rootRoute], {
    initialEntries: [initialPath]
  });
  return /*#__PURE__*/jsxRuntimeExports.jsx(RouterProvider, {
    routerConfig: {
      router: router
    }
  });
};

export { MemoryRouterProvider };
