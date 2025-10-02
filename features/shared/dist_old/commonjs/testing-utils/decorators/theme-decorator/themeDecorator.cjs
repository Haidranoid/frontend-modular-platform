'use strict';

var asyncToGenerator = require('../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.cjs');
var slicedToArray = require('../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.cjs');
var index = require('../../../_virtual/index.cjs');
var previewApi = require('@storybook/preview-api');
var styled = require('styled-components');
var require$$0 = require('react');
var addonThemes = require('@storybook/addon-themes');
var jsxRuntime = require('../../../_virtual/jsx-runtime.cjs');
var ThemeProvider = require('../../../providers/theme-provider/ThemeProvider.cjs');
var GlobalStyles = require('../../../styles/global-styles/GlobalStyles.cjs');
var darkTheme = require('../../../styles/themes/dark-theme/darkTheme.cjs');
var lightTheme = require('../../../styles/themes/light-theme/lightTheme.cjs');

var withTheme = function withTheme(Story, _ref) {
  var _parameters$withTheme;
  var parameters = _ref.parameters;
  if (parameters !== null && parameters !== void 0 && parameters.disableGlobalDecorators) return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(Story, {});
  if (parameters !== null && parameters !== void 0 && (_parameters$withTheme = parameters.withTheme) !== null && _parameters$withTheme !== void 0 && _parameters$withTheme.disable) return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(Story, {});
  parameters.themeConfig;
  var _useGlobals = previewApi.useGlobals(),
    _useGlobals2 = slicedToArray.default(_useGlobals, 2),
    globals = _useGlobals2[0],
    updateGlobals = _useGlobals2[1];
  var storybookToggle = require$$0.useCallback(function () {
    var next = globals.theme === 'light' ? 'dark' : 'light';
    updateGlobals({
      theme: next
    });
  }, [globals.theme]);
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ThemeProvider.ThemeProvider, {
    initialTheme: globals.theme,
    storybookToggle: storybookToggle,
    children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(Story, {})
  });
};
var withTheme_v0 = addonThemes.withThemeFromJSXProvider({
  themes: {
    light: lightTheme.lightTheme,
    dark: darkTheme.darkTheme
  },
  defaultTheme: 'dark',
  Provider: styled.ThemeProvider,
  GlobalStyles: GlobalStyles.GlobalStyles
});
var getStorybookThemeDecorator = /*#__PURE__*/function () {
  var _ref2 = asyncToGenerator.default(/*#__PURE__*/index.default.mark(function _callee() {
    var _yield$import, withThemeFromJSXProvider;
    return index.default.wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 1;
          return import('@storybook/addon-themes');
        case 1:
          _yield$import = _context.sent;
          withThemeFromJSXProvider = _yield$import.withThemeFromJSXProvider;
          return _context.abrupt("return", withThemeFromJSXProvider({
            themes: {
              light: lightTheme.lightTheme,
              dark: darkTheme.darkTheme
            },
            defaultTheme: 'dark',
            Provider: styled.ThemeProvider,
            GlobalStyles: GlobalStyles.GlobalStyles
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

exports.getStorybookThemeDecorator = getStorybookThemeDecorator;
exports.withTheme = withTheme;
exports.withTheme_v0 = withTheme_v0;
