'use strict';

var slicedToArray = require('../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.cjs');
var toConsumableArray = require('../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.cjs');
var require$$0 = require('react');
var reactRnd = require('react-rnd');
var StorybookContextBox_styled = require('./StorybookContextBox.styled.cjs');
var reactRouter = require('react-router');
var reactRedux = require('react-redux');
var jsxRuntime = require('../../../_virtual/jsx-runtime.cjs');
var Portal = require('../portal/Portal.cjs');
var ObjectExplorer = require('./object-explorer/ObjectExplorer.cjs');

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
  var location = reactRouter.useLocation();
  var state = reactRedux.useSelector(function (state) {
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
  }].concat(toConsumableArray.default(items));
  var _useState = require$$0.useState(defaultItems.map(function (item) {
      return item.id;
    })),
    _useState2 = slicedToArray.default(_useState, 2),
    expandedItems = _useState2[0],
    setExpandedItems = _useState2[1];
  var toggleItem = function toggleItem(id) {
    setExpandedItems(function (prev) {
      return prev.includes(id) ? prev.filter(function (i) {
        return i !== id;
      }) : [].concat(toConsumableArray.default(prev), [id]);
    });
  };
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(Portal.Portal, {
    container: domElement,
    children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(reactRnd.Rnd, {
      "default": {
        x: contextBoxConfig.location.x,
        y: contextBoxConfig.location.y,
        width: contextBoxConfig.size.width,
        height: contextBoxConfig.size.height
      },
      bounds: "window",
      dragHandleClassName: "drag-handle",
      "data-testid": "storybook-context-box",
      children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(StorybookContextBox_styled.Box, {
        children: [/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(StorybookContextBox_styled.Header, {
          className: "drag-handle",
          children: title
        }), /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(StorybookContextBox_styled.Content, {
          children: defaultItems.map(function (item) {
            return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(StorybookContextBox_styled.ItemWrapper, {
              children: [/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(StorybookContextBox_styled.ItemButton, {
                onClick: function onClick() {
                  return toggleItem(item.id);
                },
                children: [expandedItems.includes(item.id) ? '▼' : '▶', " ", item.label]
              }), expandedItems.includes(item.id) && /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("div", {
                style: {
                  marginLeft: '1rem',
                  marginTop: '0.25rem'
                },
                children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ObjectExplorer.ObjectExplorer, {
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

exports.StorybookContextBox = StorybookContextBox;
