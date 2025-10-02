'use strict';

var defineProperty = require('../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.cjs');
var reactRouter = require('react-router');
var jsxRuntime = require('../../_virtual/jsx-runtime.cjs');

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { defineProperty.default(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var RouterProvider = function RouterProvider(options) {
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(reactRouter.RouterProvider, _objectSpread({}, options.routerConfig));
};

exports.RouterProvider = RouterProvider;
