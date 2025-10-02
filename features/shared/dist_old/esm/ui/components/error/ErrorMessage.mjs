import ErrorMessageStyled from './ErrorMessage.styled.mjs';
import { j as jsxRuntimeExports } from '../../../_virtual/jsx-runtime.mjs';

var ErrorMessage = function ErrorMessage(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    "data-testid": "error-component",
    role: "log",
    children: /*#__PURE__*/jsxRuntimeExports.jsx(ErrorMessageStyled, {
      children: children
    })
  });
};

export { ErrorMessage };
