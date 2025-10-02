import _slicedToArray from '../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.mjs';
import { useState, useEffect } from 'react';
import { ThemeProvider as ThemeProvider$1 } from 'styled-components';
import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.mjs';
import { lightTheme } from '../../styles/themes/light-theme/lightTheme.mjs';
import { GlobalStyles } from '../../styles/global-styles/GlobalStyles.mjs';
import { darkTheme } from '../../styles/themes/dark-theme/darkTheme.mjs';
import { ThemeContext } from '../../state/contexts/theme-context/ThemeContext.mjs';

//export const ThemeContextProvider = ThemeContext.Provider

var ThemeProvider = function ThemeProvider(_ref) {
  var initialTheme = _ref.initialTheme,
    storybookToggle = _ref.storybookToggle,
    children = _ref.children;
  var _useState = useState(initialTheme === 'light' ? lightTheme : darkTheme),
    _useState2 = _slicedToArray(_useState, 2),
    mode = _useState2[0],
    setMode = _useState2[1];
  useEffect(function () {
    if (initialTheme) {
      setMode(initialTheme === 'light' ? lightTheme : darkTheme);
    }
  }, [initialTheme]);
  var toggle = function toggle() {
    if (storybookToggle) {
      storybookToggle();
    } else {
      setMode(function (prev) {
        return prev.name === 'light' ? darkTheme : lightTheme;
      });
    }
  };
  return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeContext.Provider, {
    value: {
      mode: mode,
      toggle: toggle
    },
    children: /*#__PURE__*/jsxRuntimeExports.jsxs(ThemeProvider$1, {
      theme: mode,
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(GlobalStyles, {}), children]
    })
  });
};

export { ThemeProvider };
