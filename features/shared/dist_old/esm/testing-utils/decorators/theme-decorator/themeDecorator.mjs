import _asyncToGenerator from '../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.mjs';
import _slicedToArray from '../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.mjs';
import _regeneratorRuntime from '../../../_virtual/index.mjs';
import { useGlobals } from '@storybook/preview-api';
import { ThemeProvider as ThemeProvider$1 } from 'styled-components';
import { useCallback } from 'react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { j as jsxRuntimeExports } from '../../../_virtual/jsx-runtime.mjs';
import { ThemeProvider } from '../../../providers/theme-provider/ThemeProvider.mjs';
import { GlobalStyles } from '../../../styles/global-styles/GlobalStyles.mjs';
import { darkTheme } from '../../../styles/themes/dark-theme/darkTheme.mjs';
import { lightTheme } from '../../../styles/themes/light-theme/lightTheme.mjs';

var withTheme = function withTheme(Story, _ref) {
  var _parameters$withTheme;
  var parameters = _ref.parameters;
  if (parameters !== null && parameters !== void 0 && parameters.disableGlobalDecorators) return /*#__PURE__*/jsxRuntimeExports.jsx(Story, {});
  if (parameters !== null && parameters !== void 0 && (_parameters$withTheme = parameters.withTheme) !== null && _parameters$withTheme !== void 0 && _parameters$withTheme.disable) return /*#__PURE__*/jsxRuntimeExports.jsx(Story, {});
  parameters.themeConfig;
  var _useGlobals = useGlobals(),
    _useGlobals2 = _slicedToArray(_useGlobals, 2),
    globals = _useGlobals2[0],
    updateGlobals = _useGlobals2[1];
  var storybookToggle = useCallback(function () {
    var next = globals.theme === 'light' ? 'dark' : 'light';
    updateGlobals({
      theme: next
    });
  }, [globals.theme]);
  return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeProvider, {
    initialTheme: globals.theme,
    storybookToggle: storybookToggle,
    children: /*#__PURE__*/jsxRuntimeExports.jsx(Story, {})
  });
};
var withTheme_v0 = withThemeFromJSXProvider({
  themes: {
    light: lightTheme,
    dark: darkTheme
  },
  defaultTheme: 'dark',
  Provider: ThemeProvider$1,
  GlobalStyles: GlobalStyles
});
var getStorybookThemeDecorator = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var _yield$import, withThemeFromJSXProvider;
    return _regeneratorRuntime.wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 1;
          return import('@storybook/addon-themes');
        case 1:
          _yield$import = _context.sent;
          withThemeFromJSXProvider = _yield$import.withThemeFromJSXProvider;
          return _context.abrupt("return", withThemeFromJSXProvider({
            themes: {
              light: lightTheme,
              dark: darkTheme
            },
            defaultTheme: 'dark',
            Provider: ThemeProvider$1,
            GlobalStyles: GlobalStyles
          }));
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getStorybookThemeDecorator() {
    return _ref2.apply(this, arguments);
  };
}();
/*
export const getStorybookThemeDecorator = async () => {
  const { withThemeFromJSXProvider } = await import('@storybook/addon-themes')
  return withThemeFromJSXProvider<ReactRenderer>({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'dark',
    Provider: ThemeProviderStyled,
    GlobalStyles: GlobalStyles,
  })
}


withThemeFromJSXProvider<ReactRenderer>({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  defaultTheme: 'dark',
  Provider: ThemeProviderStyled,
  GlobalStyles: GlobalStyles,
})
export const withThemeV_0 = withThemeFromJSXProvider<ReactRenderer>({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  defaultTheme: 'dark',
  Provider: ThemeProviderStyled,
  GlobalStyles: GlobalStyles,
})
  const [globals, updateGlobals] = useGlobals()

  const storybookToggle = useCallback(() => {
    const next = globals.theme === 'light' ? 'dark' : 'light'
    updateGlobals({ theme: next })
  }, [globals.theme])

  useEffect(() => {
    //console.log({globals});
  }, [globals])
 */

export { getStorybookThemeDecorator, withTheme, withTheme_v0 };
