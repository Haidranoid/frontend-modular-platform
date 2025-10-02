import _toConsumableArray from '../../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.mjs';
import _typeof from '../../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/typeof.mjs';
import _slicedToArray from '../../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.mjs';
import { useState } from 'react';
import { NullValue, PrimitiveValue, Container, ItemButton, KeyLabel } from './ObjectExplored.styled.mjs';
import { j as jsxRuntimeExports } from '../../../../_virtual/jsx-runtime.mjs';

function ObjectExplorer(_ref) {
  var data = _ref.data,
    _ref$level = _ref.level,
    level = _ref$level === void 0 ? 0 : _ref$level;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    expandedKeys = _useState2[0],
    setExpandedKeys = _useState2[1];
  if (data === null) return /*#__PURE__*/jsxRuntimeExports.jsx(NullValue, {
    children: "null"
  });
  if (_typeof(data) !== 'object') return /*#__PURE__*/jsxRuntimeExports.jsx(PrimitiveValue, {
    children: JSON.stringify(data)
  });
  var toggleKey = function toggleKey(key) {
    setExpandedKeys(function (prev) {
      return prev.includes(key) ? prev.filter(function (k) {
        return k !== key;
      }) : [].concat(_toConsumableArray(prev), [key]);
    });
  };
  return /*#__PURE__*/jsxRuntimeExports.jsx(Container, {
    level: level,
    children: Object.entries(data).map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];
      var isExpandable = _typeof(value) === 'object' && value !== null;
      var isExpanded = expandedKeys.includes(key);
      return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        children: [/*#__PURE__*/jsxRuntimeExports.jsxs(ItemButton, {
          onClick: function onClick() {
            return isExpandable && toggleKey(key);
          },
          children: [isExpandable ? isExpanded ? '▼' : '▶' : '•', /*#__PURE__*/jsxRuntimeExports.jsxs(KeyLabel, {
            children: [key, ":"]
          }), !isExpandable && /*#__PURE__*/jsxRuntimeExports.jsx(PrimitiveValue, {
            children: JSON.stringify(value)
          })]
        }), isExpanded && isExpandable && /*#__PURE__*/jsxRuntimeExports.jsx(ObjectExplorer, {
          data: value,
          level: level + 1
        })]
      }, key);
    })
  });
}

export { ObjectExplorer };
