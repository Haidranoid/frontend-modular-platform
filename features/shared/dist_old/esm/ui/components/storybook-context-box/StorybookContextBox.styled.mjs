import _taggedTemplateLiteral from '../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.mjs';
import styled from 'styled-components';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var Box = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.background.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.foreground.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.text.primary;
});
var Header = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 0.5rem;\n  font-weight: bold;\n  cursor: move;\n  color: ", ";\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.foreground.primary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.text.primary;
});
var Content = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 1;\n  overflow: auto;\n  padding: 0.5rem;\n  font-size: 0.9rem;\n"])));
var ItemWrapper = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid\n    ", ";\n  margin-bottom: 0.25rem;\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.foreground.secondary || theme.foreground.primary;
});
var ItemButton = styled.button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: left;\n  padding: 0.25rem 0.5rem;\n  font-weight: 500;\n  border: none;\n  background: none;\n  cursor: pointer;\n  border-radius: 4px;\n  color: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.text.primary;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.background.secondary || theme.foreground.primary;
});

export { Box, Content, Header, ItemButton, ItemWrapper };
