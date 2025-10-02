import _defineProperty from '../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.mjs';
import _asyncToGenerator from '../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.mjs';
import _slicedToArray from '../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.mjs';
import _regeneratorRuntime from '../../_virtual/index.mjs';
import axios, { AxiosHeaders } from 'axios';
import * as qs from 'query-string';
import { getBrowserSecurityService } from '../../utils/security-service/SecurityService.mjs';
import { HttpMethods } from './constants/http-methods/HttpMethods.mjs';
import { AuthenticationService } from '../../utils/authentication-service/AuthenticationService.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

// ========== Utility Functions ==========
var generateQueryParams = function generateQueryParams(queryParams) {
  return queryParams ? "?".concat(qs.stringify(queryParams)) : '';
};
var replaceEndpointVariables = function replaceEndpointVariables(endpoint, variables) {
  if (!variables) return endpoint;
  return Object.keys(variables).reduce(function (url, key) {
    return url.replace("{".concat(key, "}"), String(variables[key]));
  }, endpoint);
};
var buildEndpoint = function buildEndpoint(endpoint, queryParams, endpointVariables) {
  var withVars = replaceEndpointVariables(endpoint, endpointVariables);
  var query = generateQueryParams(queryParams);
  return "".concat(withVars).concat(query);
};
var getDefaultHeaders = function getDefaultHeaders() {
  return {
    'Device-Id': "".concat(getBrowserSecurityService().getBrowserFingerprint()),
    'Content-Type': 'application/json'
  };
};
var buildAxiosConfig = function buildAxiosConfig(customHeaders) {
  var useDefaultHeaders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var useAuthorization = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var headers = new AxiosHeaders();
  if (useDefaultHeaders) {
    for (var _i = 0, _Object$entries = Object.entries(getDefaultHeaders()); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      headers.set(key, value);
    }
  }
  if (customHeaders) {
    for (var _i2 = 0, _Object$entries2 = Object.entries(customHeaders); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        _key = _Object$entries2$_i[0],
        _value = _Object$entries2$_i[1];
      headers.set(_key, _value);
    }
  }
  if (useAuthorization) {
    var token = AuthenticationService.getAccessToken();
    if (token) {
      headers.set('Authorization', "Bearer ".concat(token));
    }
  }
  return {
    headers: headers
  };
};

// ========== HTTP Client Core ==========
var axiosInstance = axios.create();
function request(_x) {
  return _request.apply(this, arguments);
} // ========== Public API ==========
function _request() {
  _request = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var endpoint, method, body, queryParams, endpointVariables, useAuthorization, useDefaultHeaders, customHeaders, finalUrl, config, axiosMethods, response;
    return _regeneratorRuntime.wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          endpoint = _ref.endpoint, method = _ref.method, body = _ref.body, queryParams = _ref.queryParams, endpointVariables = _ref.endpointVariables, useAuthorization = _ref.useAuthorization, useDefaultHeaders = _ref.useDefaultHeaders, customHeaders = _ref.customHeaders;
          finalUrl = buildEndpoint(endpoint, queryParams, endpointVariables);
          config = buildAxiosConfig(customHeaders, useDefaultHeaders, useAuthorization);
          axiosMethods = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, HttpMethods.GET, function () {
            return axiosInstance.get(finalUrl, config);
          }), HttpMethods.POST, function () {
            return axiosInstance.post(finalUrl, body, config);
          }), HttpMethods.PUT, function () {
            return axiosInstance.put(finalUrl, body, config);
          }), HttpMethods.PATCH, function () {
            return axiosInstance.patch(finalUrl, body, config);
          }), HttpMethods.DELETE, function () {
            return axiosInstance["delete"](finalUrl, config);
          });
          _context.next = 1;
          return axiosMethods[method]();
        case 1:
          response = _context.sent;
          return _context.abrupt("return", response['data']);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _request.apply(this, arguments);
}
var httpClient = {
  get: function get(params) {
    return request(_objectSpread(_objectSpread({}, params), {}, {
      method: HttpMethods.GET
    }));
  },
  post: function post(params) {
    return request(_objectSpread(_objectSpread({}, params), {}, {
      method: HttpMethods.POST
    }));
  },
  put: function put(params) {
    return request(_objectSpread(_objectSpread({}, params), {}, {
      method: HttpMethods.PUT
    }));
  },
  patch: function patch(params) {
    return request(_objectSpread(_objectSpread({}, params), {}, {
      method: HttpMethods.PATCH
    }));
  },
  "delete": function _delete(params) {
    return request(_objectSpread(_objectSpread({}, params), {}, {
      method: HttpMethods.DELETE
    }));
  }
};

export { getDefaultHeaders, httpClient };
