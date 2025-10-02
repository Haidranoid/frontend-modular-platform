import { j as jsxRuntimeExports } from '../../../_virtual/jsx-runtime.mjs';

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
  return /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
      id: labelId,
      children: label
    }), /*#__PURE__*/jsxRuntimeExports.jsx("select", {
      id: selectId,
      value: value
      //onChange={handleOnChange}
      ,
      disabled: disabled,
      required: required,
      onChange: handleOnChange,
      children: optionValues.map(function (optionValue) {
        return /*#__PURE__*/jsxRuntimeExports.jsx("option", {
          children: optionValue
        }, optionValue);
      })
    })]
  });
};

export { Select };
