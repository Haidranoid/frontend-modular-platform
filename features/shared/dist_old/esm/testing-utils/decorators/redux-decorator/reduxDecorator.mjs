import { j as jsxRuntimeExports } from '../../../_virtual/jsx-runtime.mjs';
import { configureAppStore } from '../../../utils/configure-app-store/configureAppStore.mjs';
import { ReduxProvider } from '../../../providers/redux-provider/ReduxProvider.mjs';

var withRedux = function withRedux(Story, _ref) {
  var _parameters$withRedux;
  var parameters = _ref.parameters;
  if (parameters !== null && parameters !== void 0 && parameters.disableGlobalDecorators) return /*#__PURE__*/jsxRuntimeExports.jsx(Story, {});
  if (parameters !== null && parameters !== void 0 && (_parameters$withRedux = parameters.withRedux) !== null && _parameters$withRedux !== void 0 && _parameters$withRedux.disable) return /*#__PURE__*/jsxRuntimeExports.jsx(Story, {});
  var storeConfig = parameters.storeConfig;
  var store;
  if (storeConfig && storeConfig.rootReducer) {
    store = configureAppStore({
      rootReducer: storeConfig === null || storeConfig === void 0 ? void 0 : storeConfig.rootReducer,
      initialState: storeConfig === null || storeConfig === void 0 ? void 0 : storeConfig.initialState
    });
  } else {
    store = createDummyStore();
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx(ReduxProvider, {
    store: store,
    children: /*#__PURE__*/jsxRuntimeExports.jsx(Story, {})
  });
};
function createDummyStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return configureAppStore({
    rootReducer: function rootReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      return state;
    },
    initialState: initialState
  });
}
/*
// .storybook/reduxDecorator.js
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore'; // Adjust path as needed

const withRedux = (Story, context) => {
  const store = configureStore(context.args.initialState || {}); // Allows passing initial state from stories
  return <Provider store={store}>{Story()}</Provider>;
};

export default withRedux;


// .storybook/preview.js
import { withRedux } from './reduxDecorator'; // Adjust path as needed

export const decorators = [withRedux];



// MyComponent.stories.js
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../configureStore'; // Adjust path as needed
import MyComponent from './MyComponent';

const store = configureStore(); // Create your store here

export default {
  component: MyComponent,
  title: 'MyComponent',
  decorators: [(Story) => <Provider store={store}>{Story()}</Provider>],
};

export const Default = {};
*/

export { withRedux };
