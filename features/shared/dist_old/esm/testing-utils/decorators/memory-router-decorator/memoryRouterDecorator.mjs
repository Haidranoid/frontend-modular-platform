import { j as jsxRuntimeExports } from '../../../_virtual/jsx-runtime.mjs';
import { MemoryRouterProvider } from '../../../providers/memory-router-provider/MemoryRouterProvider.mjs';

var withMemoryRouter = function withMemoryRouter(Story, _ref) {
  var _parameters$withMemor;
  var parameters = _ref.parameters;
  if (parameters !== null && parameters !== void 0 && parameters.disableGlobalDecorators) return /*#__PURE__*/jsxRuntimeExports.jsx(Story, {});
  if (parameters !== null && parameters !== void 0 && (_parameters$withMemor = parameters.withMemoryRouter) !== null && _parameters$withMemor !== void 0 && _parameters$withMemor.disable) return /*#__PURE__*/jsxRuntimeExports.jsx(Story, {});
  var routerConfig = parameters.routerConfig;
  var routes = [{
    path: '*',
    element: /*#__PURE__*/jsxRuntimeExports.jsx(Story, {})
  }];
  return /*#__PURE__*/jsxRuntimeExports.jsx(MemoryRouterProvider, {
    initialPath: routerConfig === null || routerConfig === void 0 ? void 0 : routerConfig.initialPath,
    routes: routes
  });
};

export { withMemoryRouter };
