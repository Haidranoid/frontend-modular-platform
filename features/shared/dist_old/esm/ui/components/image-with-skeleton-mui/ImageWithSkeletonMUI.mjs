import _slicedToArray from '../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.mjs';
import { useState } from 'react';
import { j as jsxRuntimeExports } from '../../../_virtual/jsx-runtime.mjs';

var DEFAULT_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Sementales_H-B_monchina_400x300.jpg';
var Skeleton = function Skeleton() {
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {});
};
var ImageWithSkeletonMUI = function ImageWithSkeletonMUI(_ref) {
  var url = _ref.url,
    title = _ref.title;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    children: [!loaded && /*#__PURE__*/jsxRuntimeExports.jsx(Skeleton, {
      width: "400px",
      height: "280px"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("img", {
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

export { ImageWithSkeletonMUI };
