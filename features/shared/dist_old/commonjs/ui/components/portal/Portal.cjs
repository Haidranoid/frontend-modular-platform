'use strict';

var reactDom = require('react-dom');

var Portal = function Portal(props) {
  return /*#__PURE__*/reactDom.createPortal(props.children, props.container);
};

exports.Portal = Portal;
