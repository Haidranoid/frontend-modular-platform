import _defineProperty from '../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.mjs';
import _objectWithoutProperties from '../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.mjs';
import { ButtonStyled } from './Button.styled.mjs';
import { j as jsxRuntimeExports } from '../../../_virtual/jsx-runtime.mjs';

var _excluded = ["$size", "$primary", "label"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Button = function Button(_ref) {
  var _ref$$size = _ref.$size,
    $size = _ref$$size === void 0 ? 'medium' : _ref$$size,
    _ref$$primary = _ref.$primary,
    $primary = _ref$$primary === void 0 ? true : _ref$$primary,
    label = _ref.label,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/jsxRuntimeExports.jsx(ButtonStyled, _objectSpread(_objectSpread({
    $size: $size,
    $primary: $primary
  }, rest), {}, {
    children: label
  }));
};

export { Button };
