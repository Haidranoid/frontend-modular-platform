import _defineProperty from '../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.mjs';
import { configureStore } from '@reduxjs/toolkit';
import { reduxLogger } from '../redux-logger/reduxLogger.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function configureAppStore(params) {
  var store = configureStore({
    reducer: params.rootReducer,
    preloadedState: params.initialState,
    middleware: function middleware(gDM) {
      return gDM().concat(reduxLogger);
    },
    devTools: {
      name: 'Redux Devtools',
      shouldHotReload: false
    }
  });
  return _objectSpread({}, store);
}

export { configureAppStore };
