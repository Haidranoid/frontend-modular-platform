'use strict';

var defineProperty = require('../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.cjs');
var objectWithoutProperties = require('../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.cjs');
var Button_styled = require('./Button.styled.cjs');
var jsxRuntime = require('../../../_virtual/jsx-runtime.cjs');

var _excluded = ["$size", "$primary", "label"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { defineProperty.default(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Button = function Button(_ref) {
  var _ref$$size = _ref.$size,
    $size = _ref$$size === void 0 ? 'medium' : _ref$$size,
    _ref$$primary = _ref.$primary,
    $primary = _ref$$primary === void 0 ? true : _ref$$primary,
    label = _ref.label,
    rest = objectWithoutProperties.default(_ref, _excluded);
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(Button_styled.ButtonStyled, _objectSpread(_objectSpread({
    $size: $size,
    $primary: $primary
  }, rest), {}, {
    children: label
  }));
};

exports.Button = Button;
