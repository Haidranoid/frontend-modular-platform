'use strict';

var jsxRuntime = require('../../../_virtual/jsx-runtime.cjs');

var InputFile = function InputFile(props) {
  var files = props.files,
    accept = props.accept,
    label = props.label,
    handleOnChange = props.handleOnChange,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$multiple = props.multiple,
    multiple = _props$multiple === void 0 ? false : _props$multiple,
    _props$hidden = props.hidden,
    hidden = _props$hidden === void 0 ? true : _props$hidden;
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs("button", {
    children: [/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("span", {
      children: !files || files.length === 0 ? label : files[0].name
    }), /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("input", {
      onInput: handleOnChange,
      type: "file",
      multiple: multiple,
      disabled: disabled,
      accept: accept,
      hidden: hidden
    })]
  });
};

exports.InputFile = InputFile;
