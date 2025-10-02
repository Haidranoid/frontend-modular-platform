'use strict';

var reactRedux = require('react-redux');
var jsxRuntime = require('../../_virtual/jsx-runtime.cjs');

var ReduxProvider = function ReduxProvider(props) {
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(reactRedux.Provider, {
    store: props.store,
    children: props.children
  });
};

exports.ReduxProvider = ReduxProvider;
