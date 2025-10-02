import { Fragment } from 'react';
import { j as jsxRuntimeExports } from '../../../_virtual/jsx-runtime.mjs';
import { StorybookContextBox } from '../../../ui/components/storybook-context-box/StorybookContextBox.mjs';

var withStorybookContext = function withStorybookContext(Story, _ref) {
  var _parameters$withStory, _args$contextBoxArgs;
  var args = _ref.args,
    parameters = _ref.parameters;
  if (parameters !== null && parameters !== void 0 && parameters.disableGlobalDecorators) return /*#__PURE__*/jsxRuntimeExports.jsx(Story, {});
  if (parameters !== null && parameters !== void 0 && (_parameters$withStory = parameters.withStorybookContext) !== null && _parameters$withStory !== void 0 && _parameters$withStory.disable) return /*#__PURE__*/jsxRuntimeExports.jsx(Story, {});
  var contextBoxConfig = parameters.contextBoxConfig;
  return /*#__PURE__*/jsxRuntimeExports.jsxs(Fragment, {
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(StorybookContextBox, {
      title: (contextBoxConfig === null || contextBoxConfig === void 0 ? void 0 : contextBoxConfig.title) || 'App Context',
      items: (args === null || args === void 0 || (_args$contextBoxArgs = args.contextBoxArgs) === null || _args$contextBoxArgs === void 0 ? void 0 : _args$contextBoxArgs.items) || [],
      config: contextBoxConfig === null || contextBoxConfig === void 0 ? void 0 : contextBoxConfig.config,
      domElement: (contextBoxConfig === null || contextBoxConfig === void 0 ? void 0 : contextBoxConfig.domElement) || document.body
    }), /*#__PURE__*/jsxRuntimeExports.jsx(Story, {})]
  });
};

export { withStorybookContext };
