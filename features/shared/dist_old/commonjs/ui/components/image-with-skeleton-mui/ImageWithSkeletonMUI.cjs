'use strict';

var slicedToArray = require('../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.cjs');
var require$$0 = require('react');
var jsxRuntime = require('../../../_virtual/jsx-runtime.cjs');

var DEFAULT_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Sementales_H-B_monchina_400x300.jpg';
var Skeleton = function Skeleton() {
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("div", {});
};
var ImageWithSkeletonMUI = function ImageWithSkeletonMUI(_ref) {
  var url = _ref.url,
    title = _ref.title;
  var _useState = require$$0.useState(false),
    _useState2 = slicedToArray.default(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  var _useState3 = require$$0.useState(false),
    _useState4 = slicedToArray.default(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs("div", {
    children: [!loaded && /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(Skeleton, {
      width: "400px",
      height: "280px"
    }), /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("img", {
      src: error ? DEFAULT_IMAGE : url,
      alt: title,
      onLoad: function onLoad() {
        return setLoaded(true);
      },
      onError: function onError() {
        setLoaded(true); // Hide skeleton even on error
        setError(true);
      }
      //className={clsx(classes.image, { [classes.hidden]: !loaded })}
    })]
  });
};

exports.ImageWithSkeletonMUI = ImageWithSkeletonMUI;
