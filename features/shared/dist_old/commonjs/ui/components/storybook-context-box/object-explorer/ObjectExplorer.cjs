'use strict';

var toConsumableArray = require('../../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.cjs');
var _typeof = require('../../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/typeof.cjs');
var slicedToArray = require('../../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.cjs');
var require$$0 = require('react');
var ObjectExplored_styled = require('./ObjectExplored.styled.cjs');
var jsxRuntime = require('../../../../_virtual/jsx-runtime.cjs');

function ObjectExplorer(_ref) {
  var data = _ref.data,
    _ref$level = _ref.level,
    level = _ref$level === void 0 ? 0 : _ref$level;
  var _useState = require$$0.useState([]),
    _useState2 = slicedToArray.default(_useState, 2),
    expandedKeys = _useState2[0],
    setExpandedKeys = _useState2[1];
  if (data === null) return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ObjectExplored_styled.NullValue, {
    children: "null"
  });
  if (_typeof.default(data) !== 'object') return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ObjectExplored_styled.PrimitiveValue, {
    children: JSON.stringify(data)
  });
  var toggleKey = function toggleKey(key) {
    setExpandedKeys(function (prev) {
      return prev.includes(key) ? prev.filter(function (k) {
        return k !== key;
      }) : [].concat(toConsumableArray.default(prev), [key]);
    });
  };
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ObjectExplored_styled.Container, {
    level: level,
    children: Object.entries(data).map(function (_ref2) {
      var _ref3 = slicedToArray.default(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];
      var isExpandable = _typeof.default(value) === 'object' && value !== null;
      var isExpanded = expandedKeys.includes(key);
      return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs("div", {
        children: [/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(ObjectExplored_styled.ItemButton, {
          onClick: function onClick() {
            return isExpandable && toggleKey(key);
          },
          children: [isExpandable ? isExpanded ? '▼' : '▶' : '•', /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(ObjectExplored_styled.KeyLabel, {
            children: [key, ":"]
          }), !isExpandable && /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ObjectExplored_styled.PrimitiveValue, {
            children: JSON.stringify(value)
          })]
        }), isExpanded && isExpandable && /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ObjectExplorer, {
          data: value,
          level: level + 1
        })]
      }, key);
    })
  });
}

exports.ObjectExplorer = ObjectExplorer;
