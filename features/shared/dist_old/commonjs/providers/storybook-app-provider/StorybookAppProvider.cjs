'use strict';

var require$$0 = require('react');
var jsxRuntime = require('../../_virtual/jsx-runtime.cjs');
var MemoryRouterProvider = require('../memory-router-provider/MemoryRouterProvider.cjs');
var StorybookContextBox = require('../../ui/components/storybook-context-box/StorybookContextBox.cjs');
var ReduxProvider = require('../redux-provider/ReduxProvider.cjs');
var ThemeProvider = require('../theme-provider/ThemeProvider.cjs');

var StorybookAppProvider = function StorybookAppProvider(props) {
  var _props$storybookConte, _props$storybookConte2, _props$storybookConte3, _props$storybookConte4;
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(require$$0.StrictMode, {
    children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ReduxProvider.ReduxProvider, {
      store: props.store,
      children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ThemeProvider.ThemeProvider, {
        children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(MemoryRouterProvider.MemoryRouterProvider, {
          initialPath: props.initialPath,
          routes: props.routes,
          wrapper: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(StorybookContextBox.StorybookContextBox, {
            title: ((_props$storybookConte = props.storybookContextConfig) === null || _props$storybookConte === void 0 ? void 0 : _props$storybookConte.title) || 'App Context',
            items: ((_props$storybookConte2 = props.storybookContextConfig) === null || _props$storybookConte2 === void 0 ? void 0 : _props$storybookConte2.items) || [],
            config: (_props$storybookConte3 = props.storybookContextConfig) === null || _props$storybookConte3 === void 0 ? void 0 : _props$storybookConte3.config,
            domElement: ((_props$storybookConte4 = props.storybookContextConfig) === null || _props$storybookConte4 === void 0 ? void 0 : _props$storybookConte4.domElement) || document.getElementsByTagName('body')[0]
          })
        })
      })
    })
  });
};

exports.StorybookAppProvider = StorybookAppProvider;
