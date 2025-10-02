import { Provider } from 'react-redux';
import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.mjs';

var ReduxProvider = function ReduxProvider(props) {
  return /*#__PURE__*/jsxRuntimeExports.jsx(Provider, {
    store: props.store,
    children: props.children
  });
};

export { ReduxProvider };
