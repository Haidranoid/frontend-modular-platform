'use strict';

var taggedTemplateLiteral = require('../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.cjs');
var styled = require('styled-components');

var _templateObject;
var GlobalStyles = styled.createGlobalStyle(_templateObject || (_templateObject = taggedTemplateLiteral.default(["\n  body {\n    margin: 0;\n    padding: 0;\n    background-color: ", ";\n    color: ", ";\n    //transition: all 0.3s ease;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.background.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.text.primary;
});

exports.GlobalStyles = GlobalStyles;
