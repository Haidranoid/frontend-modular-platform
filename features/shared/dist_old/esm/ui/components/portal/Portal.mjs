import { createPortal } from 'react-dom';

var Portal = function Portal(props) {
  return /*#__PURE__*/createPortal(props.children, props.container);
};

export { Portal };
