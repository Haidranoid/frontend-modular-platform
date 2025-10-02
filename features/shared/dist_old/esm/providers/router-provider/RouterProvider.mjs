import _defineProperty from '../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.mjs';
import { RouterProvider as RouterProvider$1 } from 'react-router';
import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var RouterProvider = function RouterProvider(options) {
  return /*#__PURE__*/jsxRuntimeExports.jsx(RouterProvider$1, _objectSpread({}, options.routerConfig));
};

export { RouterProvider };
