'use strict';

var ErrorMessage_styled = require('./ErrorMessage.styled.cjs');
var jsxRuntime = require('../../../_virtual/jsx-runtime.cjs');

var ErrorMessage = function ErrorMessage(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("div", {
    "data-testid": "error-component",
    role: "log",
    children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ErrorMessage_styled.default, {
      children: children
    })
  });
};

exports.ErrorMessage = ErrorMessage;
