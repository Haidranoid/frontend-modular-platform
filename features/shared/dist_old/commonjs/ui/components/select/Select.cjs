'use strict';

var jsxRuntime = require('../../../_virtual/jsx-runtime.cjs');

var Select = function Select(props) {
  var label = props.label,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    optionValues = props.optionValues,
    handleOnChange = props.handleOnChange,
    _props$required = props.required,
    required = _props$required === void 0 ? true : _props$required,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled;
  var labelId = label.replaceAll(' ', '-').toLowerCase().concat('-label');
  var selectId = label.replaceAll(' ', '-').toLowerCase().concat('-select');
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(jsxRuntime.jsxRuntimeExports.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("label", {
      id: labelId,
      children: label
    }), /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("select", {
      id: selectId,
      value: value
      //onChange={handleOnChange}
      ,
      disabled: disabled,
      required: required,
      onChange: handleOnChange,
      children: optionValues.map(function (optionValue) {
        return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("option", {
          children: optionValue
        }, optionValue);
      })
    })]
  });
};

exports.Select = Select;
