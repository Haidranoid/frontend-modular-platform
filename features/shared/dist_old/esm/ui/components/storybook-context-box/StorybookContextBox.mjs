import _slicedToArray from '../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.mjs';
import _toConsumableArray from '../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.mjs';
import { useState } from 'react';
import { Rnd } from 'react-rnd';
import { Box, Header, Content, ItemWrapper, ItemButton } from './StorybookContextBox.styled.mjs';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { j as jsxRuntimeExports } from '../../../_virtual/jsx-runtime.mjs';
import { Portal } from '../portal/Portal.mjs';
import { ObjectExplorer } from './object-explorer/ObjectExplorer.mjs';

var StorybookContextBox = function StorybookContextBox(_ref) {
  var title = _ref.title,
    items = _ref.items,
    domElement = _ref.domElement,
    config = _ref.config;
  var contextBoxConfig = config ? config : {
    location: {
      x: 0,
      y: 0
    },
    size: {
      width: 300,
      height: 300
    }
  };
  var location = useLocation();
  var state = useSelector(function (state) {
    return state;
  });
  var defaultItems = [
  // @ts-ignore
  {
    id: 'redux',
    label: 'Redux State',
    data: state
  }, {
    id: 'location',
    label: 'React Router Location',
    data: location
  }].concat(_toConsumableArray(items));
  var _useState = useState(defaultItems.map(function (item) {
      return item.id;
    })),
    _useState2 = _slicedToArray(_useState, 2),
    expandedItems = _useState2[0],
    setExpandedItems = _useState2[1];
  var toggleItem = function toggleItem(id) {
    setExpandedItems(function (prev) {
      return prev.includes(id) ? prev.filter(function (i) {
        return i !== id;
      }) : [].concat(_toConsumableArray(prev), [id]);
    });
  };
  return /*#__PURE__*/jsxRuntimeExports.jsx(Portal, {
    container: domElement,
    children: /*#__PURE__*/jsxRuntimeExports.jsx(Rnd, {
      "default": {
        x: contextBoxConfig.location.x,
        y: contextBoxConfig.location.y,
        width: contextBoxConfig.size.width,
        height: contextBoxConfig.size.height
      },
      bounds: "window",
      dragHandleClassName: "drag-handle",
      "data-testid": "storybook-context-box",
      children: /*#__PURE__*/jsxRuntimeExports.jsxs(Box, {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Header, {
          className: "drag-handle",
          children: title
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Content, {
          children: defaultItems.map(function (item) {
            return /*#__PURE__*/jsxRuntimeExports.jsxs(ItemWrapper, {
              children: [/*#__PURE__*/jsxRuntimeExports.jsxs(ItemButton, {
                onClick: function onClick() {
                  return toggleItem(item.id);
                },
                children: [expandedItems.includes(item.id) ? '▼' : '▶', " ", item.label]
              }), expandedItems.includes(item.id) && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
                style: {
                  marginLeft: '1rem',
                  marginTop: '0.25rem'
                },
                children: /*#__PURE__*/jsxRuntimeExports.jsx(ObjectExplorer, {
                  data: item.data
                })
              })]
            }, item.id);
          })
        })]
      })
    })
  });
};

export { StorybookContextBox };
