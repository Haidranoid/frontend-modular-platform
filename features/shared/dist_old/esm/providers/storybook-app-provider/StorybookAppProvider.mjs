import { StrictMode } from 'react';
import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.mjs';
import { MemoryRouterProvider } from '../memory-router-provider/MemoryRouterProvider.mjs';
import { StorybookContextBox } from '../../ui/components/storybook-context-box/StorybookContextBox.mjs';
import { ReduxProvider } from '../redux-provider/ReduxProvider.mjs';
import { ThemeProvider } from '../theme-provider/ThemeProvider.mjs';

var StorybookAppProvider = function StorybookAppProvider(props) {
  var _props$storybookConte, _props$storybookConte2, _props$storybookConte3, _props$storybookConte4;
  return /*#__PURE__*/jsxRuntimeExports.jsx(StrictMode, {
    children: /*#__PURE__*/jsxRuntimeExports.jsx(ReduxProvider, {
      store: props.store,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(ThemeProvider, {
        children: /*#__PURE__*/jsxRuntimeExports.jsx(MemoryRouterProvider, {
          initialPath: props.initialPath,
          routes: props.routes,
          wrapper: /*#__PURE__*/jsxRuntimeExports.jsx(StorybookContextBox, {
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

export { StorybookAppProvider };
