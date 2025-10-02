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
var ButtonStyled = styled__default.default.button(_templateObject || (_templateObject = taggedTemplateLiteral.default(["\n  cursor: pointer;\n  border: none;\n  outline: none;\n  border-radius: 6px;\n  font-weight: 500;\n  color: inherit;\n  background-color: ", ";\n\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n\n  transition: background-color 0.2s ease;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  &:active {\n    opacity: 0.9;\n  }\n"])), function (_ref) {
  var theme = _ref.theme,
    $primary = _ref.$primary;
  return $primary ? theme.colors.primary : theme.colors.secondary;
}, function (_ref2) {
  var _ref2$$size = _ref2.$size,
    $size = _ref2$$size === void 0 ? 'medium' : _ref2$$size;
  return sizes[$size].w;
}, function (_ref3) {
  var _ref3$$size = _ref3.$size,
    $size = _ref3$$size === void 0 ? 'medium' : _ref3$$size;
  return sizes[$size].h;
}, function (_ref4) {
  var _ref4$$size = _ref4.$size,
    $size = _ref4$$size === void 0 ? 'medium' : _ref4$$size;
  return sizes[$size].fs;
}, function (_ref5) {
  var theme = _ref5.theme,
    $primary = _ref5.$primary;
  return $primary ? theme.colors['primaryHover'] : theme.colors['secondaryHover'];
});

exports.ButtonStyled = ButtonStyled;
