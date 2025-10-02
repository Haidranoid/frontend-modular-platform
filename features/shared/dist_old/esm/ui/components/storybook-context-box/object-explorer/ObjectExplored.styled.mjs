import _taggedTemplateLiteral from '../../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.mjs';
import styled from 'styled-components';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var Container = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-left: ", ";\n  border-left: ", ";\n  padding-left: ", ";\n  font-family: monospace;\n  color: ", ";\n"])), function (_ref) {
  var level = _ref.level;
  return level > 0 ? '1rem' : '0';
}, function (_ref2) {
  var level = _ref2.level,
    theme = _ref2.theme;
  return level > 0 ? "1px solid ".concat(theme.foreground.secondary || theme.foreground.primary) : 'none';
}, function (_ref3) {
  var level = _ref3.level;
  return level > 0 ? '0.5rem' : '0';
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.text.primary;
});
var ItemButton = styled.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background: none;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  padding: 2px 4px;\n  border-radius: 4px;\n  color: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.text.primary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.background.secondary || theme.foreground.primary;
});
var KeyLabel = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-weight: 600;\n"])));
var PrimitiveValue = styled.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-left: 0.25rem;\n  color: ", ";\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.primary;
});
var NullValue = styled.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.text.secondary;
});

export { Container, ItemButton, KeyLabel, NullValue, PrimitiveValue };
