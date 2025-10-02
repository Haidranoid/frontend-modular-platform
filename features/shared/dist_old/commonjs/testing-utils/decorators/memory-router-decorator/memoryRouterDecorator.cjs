'use strict';

var jsxRuntime = require('../../../_virtual/jsx-runtime.cjs');
var MemoryRouterProvider = require('../../../providers/memory-router-provider/MemoryRouterProvider.cjs');

var withMemoryRouter = function withMemoryRouter(Story, _ref) {
  var _parameters$withMemor;
  var parameters = _ref.parameters;
  if (parameters !== null && parameters !== void 0 && parameters.disableGlobalDecorators) return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(Story, {});
  if (parameters !== null && parameters !== void 0 && (_parameters$withMemor = parameters.withMemoryRouter) !== null && _parameters$withMemor !== void 0 && _parameters$withMemor.disable) return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(Story, {});
  var routerConfig = parameters.routerConfig;
  var routes = [{
    path: '*',
    element: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(Story, {})
  }];
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(MemoryRouterProvider.MemoryRouterProvider, {
    initialPath: routerConfig === null || routerConfig === void 0 ? void 0 : routerConfig.initialPath,
    routes: routes
  });
};

exports.withMemoryRouter = withMemoryRouter;
