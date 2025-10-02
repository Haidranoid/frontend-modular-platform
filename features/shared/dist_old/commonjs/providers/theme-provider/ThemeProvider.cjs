'use strict';

var slicedToArray = require('../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.cjs');
var require$$0 = require('react');
var styled = require('styled-components');
var jsxRuntime = require('../../_virtual/jsx-runtime.cjs');
var lightTheme = require('../../styles/themes/light-theme/lightTheme.cjs');
var GlobalStyles = require('../../styles/global-styles/GlobalStyles.cjs');
var darkTheme = require('../../styles/themes/dark-theme/darkTheme.cjs');
var ThemeContext = require('../../state/contexts/theme-context/ThemeContext.cjs');

//export const ThemeContextProvider = ThemeContext.Provider

var ThemeProvider = function ThemeProvider(_ref) {
  var initialTheme = _ref.initialTheme,
    storybookToggle = _ref.storybookToggle,
    children = _ref.children;
  var _useState = require$$0.useState(initialTheme === 'light' ? lightTheme.lightTheme : darkTheme.darkTheme),
    _useState2 = slicedToArray.default(_useState, 2),
    mode = _useState2[0],
    setMode = _useState2[1];
  require$$0.useEffect(function () {
    if (initialTheme) {
      setMode(initialTheme === 'light' ? lightTheme.lightTheme : darkTheme.darkTheme);
    }
  }, [initialTheme]);
  var toggle = function toggle() {
    if (storybookToggle) {
      storybookToggle();
    } else {
      setMode(function (prev) {
        return prev.name === 'light' ? darkTheme.darkTheme : lightTheme.lightTheme;
      });
    }
  };
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ThemeContext.ThemeContext.Provider, {
    value: {
      mode: mode,
      toggle: toggle
    },
    children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(styled.ThemeProvider, {
      theme: mode,
      children: [/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(GlobalStyles.GlobalStyles, {}), children]
    })
  });
};

exports.ThemeProvider = ThemeProvider;
