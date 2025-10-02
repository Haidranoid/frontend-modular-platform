'use strict';

var taggedTemplateLiteral = require('../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.cjs');
var styled = require('styled-components');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

var _templateObject;
var sizes = {
  small: {
    w: '100px',
    h: '36px',
    fs: '0.85rem'
  },
  medium: {
    w: '140px',
    h: '40px',
    fs: '0.9rem'
  },
  large: {
    w: '180px',
    h: '45px',
    fs: '1rem'
  }
};
var InputStyled = styled__default.default.input(_templateObject || (_templateObject = taggedTemplateLiteral.default(["\n  border: 1px solid\n    ", ";\n  outline: none;\n  border-radius: 6px;\n  padding: 0 10px;\n  color: black;\n  background-color: ", ";\n\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n\n  &:focus {\n    border-color: ", ";\n    box-shadow: 0 0 0 2px ", "33; /* leve highlight */\n  }\n"])), function (_ref) {
  var theme = _ref.theme,
    $primary = _ref.$primary;
  return $primary ? theme.colors.primary : theme.colors.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.background['input'];
}, function (_ref3) {
  var _ref3$$size = _ref3.$size,
    $size = _ref3$$size === void 0 ? 'medium' : _ref3$$size;
  return sizes[$size].w;
}, function (_ref4) {
  var _ref4$$size = _ref4.$size,
    $size = _ref4$$size === void 0 ? 'medium' : _ref4$$size;
  return sizes[$size].h;
}, function (_ref5) {
  var _ref5$$size = _ref5.$size,
    $size = _ref5$$size === void 0 ? 'medium' : _ref5$$size;
  return sizes[$size].fs;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors['accent'];
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors['accent'];
});

exports.InputStyled = InputStyled;
